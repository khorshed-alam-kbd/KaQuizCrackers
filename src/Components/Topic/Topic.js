import React from 'react';
import './Topic.css'
const Topic = ({ quizTopic }) => {
    // console(quizTopic);
    const { name, logo, total, } = quizTopic;


    return (
        <div className='topic-info'>
            <img src={logo} alt="" />

            <p> Topic Name: <span>{name}</span> </p>
            <p> Question Available : <span>{total}</span> </p>

        </div>
    );
};

export default Topic;