import React from 'react';
import './Questionnaire.css'


export default function Questionnaire({loveLanguage, showResult, selectedQuestion, nextQuestion}) {

    const questions = [
        {
            'physicalTouchAnswer': 'pulls me close and cuddles me while we watch a movie',
            'qualityTimeAnswer': 'and I spend a weekend alone in a cabin',
            'actsOfServiceAnswer': 'completes a task for me that I have been dreading for weeks',
            'wordsOfAffirmationAnswer': 'leaves me a thoughtful note in my bag',
            'giftsAnswer': 'surprises me with an item I had mentioned I wanted weeks ago'
        },
        {
            'physicalTouchAnswer': 'greets me with a long hug',
            'qualityTimeAnswer': 'sits near me while I finish up work',
            'actsOfServiceAnswer': 'cooks me dinner after a busy day',
            'wordsOfAffirmationAnswer': 'reminds me they are thinking of me in the middle of the day',
            'giftsAnswer': 'buys concert tickets to go see my favorite artist'
        },
        {
            'physicalTouchAnswer': 'grabs my hand during a walk',
            'qualityTimeAnswer': 'plans a device free evening for us',
            'actsOfServiceAnswer': 'wakes me up with breakfast in bed',
            'wordsOfAffirmationAnswer': 'leaves a loving sticky note on my bathroom mirror',
            'giftsAnswer': 'gets me a unique drawing of my favorite city'
        },
        {
            'physicalTouchAnswer': 'gives me a massage as I get ready for bed',
            'qualityTimeAnswer': 'and I start a new tv series together',
            'actsOfServiceAnswer': 'shows up to my job with a cup of my favorite coffee',
            'wordsOfAffirmationAnswer': 'speaks highly of me when introducing me to new friends',
            'giftsAnswer': 'brings my cat/dog gourmet treats and toys'
        },
        {
            'physicalTouchAnswer': 'plays with my hair',
            'qualityTimeAnswer': 'buys ingredients so we can cook a meal together',
            'actsOfServiceAnswer': 'plans a date night for us',
            'wordsOfAffirmationAnswer': 'told me how good looking I was on an average day',
            'giftsAnswer': 'creates a playlist of songs that I might love'
        },
        {
            'physicalTouchAnswer': 'rested their head on my lap',
            'qualityTimeAnswer': 'goes volunteering with me',
            'actsOfServiceAnswer': 'takes care of my every need while I lay in bed sick',
            'wordsOfAffirmationAnswer': 'asks me to help with mundane tasks because they feel everything is more fun when they are with me',
            'giftsAnswer': 'makes me a calendar full of pictures of our favorite memories together'
        },
        {
            'physicalTouchAnswer': 'holds on to me while we walk together',
            'qualityTimeAnswer': 'tried out a hobby that I love',
            'actsOfServiceAnswer': 'tossed my towel in the dryer while I showered so I have a warm towel to use when I exit',
            'wordsOfAffirmationAnswer': 'tells me the things they admire about me',
            'giftsAnswer': 'gave me an inspirational poster to hang in my new office'
        },
        {
            'physicalTouchAnswer': 'rests their hand on mine while we drive',
            'qualityTimeAnswer': 'exercised with me',
            'actsOfServiceAnswer': 'meal prepped all of our meals for the week',
            'wordsOfAffirmationAnswer': 'tells me why they appreciate me',
            'giftsAnswer': 'bought me new shoes after I shared that I wanted to start running'
        }
    ]


    return (
        <div>
            {showResult ? (
                <div>
                    <h3> Your Love Language is {loveLanguage} 
                    </h3>
                </div>
            ) : (
                <div className="questionnaire">
                    <div className="questionTitle text-center">
                        <strong>
                            It's MOST meaningful when my partner...
                        </strong>
                    </div>
                    <br />
                    {/* QUESTIONNAIRE BEGINS */}
                    {questions.map((question, index) => {
                        if (index === selectedQuestion) {
                            return (
                                <div class="allAnswers">
                                    <button onClick={() => nextQuestion(1)} type="radio" className="my-3 option1">
                                        <p>
                                            {question.physicalTouchAnswer}
                                        </p>
                                    </button>

                                    <button onClick={() => nextQuestion(2)} type="radio" className="my-3 option2">
                                        <p>
                                            {question.qualityTimeAnswer}
                                        </p>
                                    </button>

                                    <button onClick={() => nextQuestion(3)} type="radio" name="my-3 option3">
                                        <p>
                                            {question.actsOfServiceAnswer}
                                        </p>
                                    </button>

                                    <button onClick={() => nextQuestion(4)} type="radio" name="my-3 option4">
                                        <p>
                                            {question.wordsOfAffirmationAnswer}
                                        </p>
                                    </button>

                                    <button onClick={() => nextQuestion(5)} type="radio" name="my-3 option5">
                                        <p>
                                            {question.giftsAnswer}
                                        </p>
                                    </button>
                                </div>
                            )
                        }
                    }
                    )}
                </div>
            )}
        </div>
    )
}


