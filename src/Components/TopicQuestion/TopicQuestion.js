import React from 'react';

const TopicQuestion = (questions) => {
    const { question, options } = questions.questions

    console.log(questions);
    return (
        <div className='border border-primary m-3 text-center'>
            <h3> Quiz Number: {question}</h3>
            <div >
                {
                    options.map(option => <p className='border border-primary m-3' >{option}</p>)
                }
            </div>

        </div>
    );
};

export default TopicQuestion;