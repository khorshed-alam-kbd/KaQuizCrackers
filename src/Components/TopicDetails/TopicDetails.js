import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TopicDetails = () => {
    const topic = useLoaderData();
    const topicDetails = topic.data

    console.log(topicDetails);
    return (
        <div>
            <h2>Quiz of { }</h2>

        </div>
    );
};

export default TopicDetails;