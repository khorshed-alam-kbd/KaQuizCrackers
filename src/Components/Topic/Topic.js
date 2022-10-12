import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'
const Topic = ({ quizTopic }) => {
    // console(quizTopic);
    const { name, logo, total, id } = quizTopic;


    return (
        <div className='border rounded border-primary topic-info'>
            <img src={logo} alt="" />

            <div>
                <p> Topic Name: <span>{name}</span> </p>
                <p> Question Available : <span>{total}</span> </p>
            </div>
            <Link to={`quiz/${id}`}>
                <button className=' btn btn-primary w-100 mb-2'> Quiz Attempt</button>
            </Link>
        </div>
    );
};

export default Topic;