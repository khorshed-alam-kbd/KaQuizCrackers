import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, XAxis, YAxis, BarChart, Bar, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const Statistics = () => {
    const Topics = useLoaderData();
    const quizTopics = Topics.data
    console.log('stat', quizTopics)
    const data = quizTopics;
    return (
        <div className='container mt-5 text-center '>
            <h3 className='mb-5'>Number of Questions in each Topics</h3>

            <ResponsiveContainer width="100%" aspect={3}>

                <BarChart
                    width={600}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#8884d8" />

                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;