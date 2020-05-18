import React, { useState, useEffect } from 'react';
import { Legend, ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line } from 'recharts';
import { JATOHeading, JATOBasicCard, JATOText } from '@jato/ui-component-library';
import theStore from '../stores/store';
import { GetPage2Data } from '../actions/actions';

const Page2 = () => {
    const [data, setData] = useState([]);

    const dataComingIn = () => {
        setData(theStore.page2Data);
    }

    useEffect(() => {
        theStore.on(theStore.notifications.page2Received, dataComingIn);

        if (data.length === 0){
            GetPage2Data();
        }

        return(function(){
            theStore.removeAllListeners(theStore.notifications.page2Received);
        });
    });

    return(<JATOBasicCard>
            <JATOHeading as="h3">Fuel Efficiency over time</JATOHeading>
            <JATOText as="div">Compare how your car has used fuel against other vehicles</JATOText>
            <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="age"/>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="2015" stroke="#000000" />
                    <Line type="monotone" dataKey="2016" stroke="#C6C6C6" />
                    <Line type="monotone" dataKey="2017" stroke="#4392B5" />
                    <Line type="monotone" dataKey="2018" stroke="#D4E6F1" />
                    <Line type="monotone" dataKey="2019" stroke="#e28082" />
                    <Line type="monotone" dataKey="Your Car" stroke="#C40005" />
                </LineChart>
            </ResponsiveContainer>
        </JATOBasicCard>);
}

export default Page2;