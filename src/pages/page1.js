import React, { useState, useEffect } from 'react';
import { CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { JATOHeading, JATOBasicCard, JATOText } from '@jato/ui-component-library';
import theStore from '../stores/store';
import { GetPage1Data } from '../actions/actions';

const Page1 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        theStore.on(theStore.notifications.testNotification, testNotification);

        if (data.length === 0){
            GetPage1Data();
        }

        return function(){
            theStore.removeAllListeners(theStore.notifications.testNotification);
        }
    });

    const testNotification = () => {
        setData(theStore.page1Data);
    }

    return(<JATOBasicCard>
        <JATOHeading as="h3">Kilometers per litre per model year</JATOHeading>
        <JATOText as="div">Compare your vehicle against other vehicles</JATOText>
        <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#C40005" />
            </BarChart>
        </ResponsiveContainer>
    </JATOBasicCard>);
}

export default Page1;