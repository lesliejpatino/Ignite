import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { FaGoogle, FaFacebook } from "react-icons/fa";
import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main style={{margin: '20px'}} >
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit} style={{ height: '750px',margin: '20px'}}>
              <h3 >Sign Up</h3>
              <label htmlFor="username">Your Name</label>
                <input
                  className="form-input"
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <label htmlFor="username">Your Partner's Name</label>
                <input
                  className="form-input"
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <label htmlFor="username">Email</label>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  id=""
                />
                <label htmlFor="password">Password</label>
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  style={{ cursor: 'pointer', marginTop: '20px' }}
                  type="submit"
                >
                  Log In
                </button>
                <div className="social">
                  <div className="go"><FaGoogle className='mt-2 rounded' /> Google</div>
                  <div className="fb"><FaFacebook className='mt-2'/> Facebook</div>
                </div>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
    </main>
  );
};

export default Signup;
