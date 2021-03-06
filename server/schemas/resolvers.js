const { AuthenticationError } = require('apollo-server-express');
const { User, QuestionOfTheDay, GoalsForPartner } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    questionOfTheDay: async () => {
      return QuestionOfTheDay.find();
    },
    users: async () => {
      return User.find(); //.populate('questionnaire');
    },
    user: async (parent, { username, username2 }) => {
      return User.findOne({ username, username2 }); //.populate('questionnaire');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }); //.populate('questionnaire');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    GFP: async () => {
      return await GoalsForPartner.find({});
    },
  },

  Mutation: {
    addUser: async (parent, { username, username2, email, password }) => {
      const user = await User.create({ username, username2, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addLoveLanguage: async (parent, { username, username2, loveLanguage1, loveLanguage2 }) => {
      const user = await User.findOneAndUpdate({username: username}, {loveLanguage1: loveLanguage1, loveLanguage2: loveLanguage2}, {
        new: true
      });
      return { user };
    },
  },
};

module.exports = resolvers;



