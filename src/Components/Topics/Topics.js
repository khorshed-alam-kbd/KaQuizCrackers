import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const Topics = useLoaderData();
    const quizTopics = Topics.data
    console.log(quizTopics);
    return (
        <div className='m-5'>
            {
                quizTopics.map(quizTopic => <Topic
                    key={quizTopic.id}
                    quizTopic={quizTopic}
                ></Topic>)
            }
        </div>
    );
};

export default Topics;