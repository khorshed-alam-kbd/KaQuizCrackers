import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css'

const Topics = () => {
    const Topics = useLoaderData();
    const quizTopics = Topics.data
    // console.log(quizTopics);
    return (
        <div className='container mt-5'>
            <div className='header-bg rounded text-white'>
                <h2 className='p-3 text-center'> Want to test your knowledge?</h2>
                <p className='pt-0 p-3 text-center'> Brush up on your web developing knowledge <br /> with interesting questions.</p>
            </div>
            <div className='mt-5 quiz-card'>
                {
                    quizTopics.map(quizTopic => <Topic
                        key={quizTopic.id}
                        quizTopic={quizTopic}
                    ></Topic>)
                }
            </div>
        </div>

    );
};

export default Topics;