import React from 'react';

const TopicQuestion = (questions) => {
    const { question, options, correctAnswer } = questions.questions
    console.log(questions.questions);
    return (
        <div className='border rounded border-primary m-3 p-5 text-center d-flex'>

            <div >
                <h3> Question: {question}</h3>
                {
                    options.map(option => <p className='border rounded border-primary m-3 p-3' >{option}</p>)
                }
            </div>
            <button>{correctAnswer}</button>
        </div>
    );
};

export default TopicQuestion;