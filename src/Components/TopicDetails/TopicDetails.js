import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicQuestion from '../TopicQuestion/TopicQuestion';

const TopicDetails = () => {
    const topic = useLoaderData();
    const topicDetails = topic.data

    const { name, questions, } = topicDetails;

    return (
        <div className='container'>
            <h2 className='mt-5 text-center'>Quiz of {name}</h2>
            {
                questions.map(questions => <TopicQuestion
                    questions={questions}
                ></TopicQuestion>
                )
            }

        </div>
    );
};

export default TopicDetails;