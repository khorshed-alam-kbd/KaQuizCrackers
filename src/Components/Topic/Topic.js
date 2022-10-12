import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Topic.css'
const Topic = ({ quizTopic }) => {
    // console(quizTopic);
    const { name, logo, total, id } = quizTopic;


    return (
        <div className='topic-info'>
            <img src={logo} alt="" />

            <div>
                <p> Topic Name: <span>{name}</span> </p>
                <p> Question Available : <span>{total}</span> </p>
            </div>
            <Link to={`quiz/${id}`}>
                <Button className='w-100 mb-2 ' variant="primary">Quiz Attempt</Button>
            </Link>
        </div>
    );
};

export default Topic;