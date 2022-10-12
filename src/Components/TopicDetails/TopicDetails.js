import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicQuestion from '../TopicQuestion/TopicQuestion';

const TopicDetails = () => {
    const topic = useLoaderData();
    const topicDetails = topic.data

    const { name, questions } = topicDetails;

    // console.log(questions);
    return (
        <div className='container'>
            <h2 className='mt-5 text-center'>Quiz of {name}</h2>
            {
                questions.map(question => <TopicQuestion
                    key={question.id}
                    questions={question}
                ></TopicQuestion>

                )

            }


        </div>
    );
};

export default TopicDetails;