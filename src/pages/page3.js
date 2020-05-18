import React, { useState, useEffect } from 'react';
import { JATOHeading, JATOBasicCard, JATOText } from '@jato/ui-component-library';
import { ResponsiveContainer, AreaChart, XAxis, YAxis, CartesianGrid, Area, Tooltip } from 'recharts';
import theStore from '../stores/store';
import { GetPage3Data } from '../actions/actions';

const Page3 = () => {
    const [data, setData] = useState([]);

    const dataComingIn = () => {
        setData([...theStore.page3Data]);
    }

    useEffect(() => {        
        theStore.on(theStore.notifications.page3Received, dataComingIn);

        if (data.length === 0){
            GetPage3Data();
        }
        return function(){
            theStore.removeAllListeners(theStore.notifications.page3Received);
        }
    });

    return<JATOBasicCard>
        <JATOHeading as="h3">Distance Travelled</JATOHeading>
        <JATOText as="div">Compare your distance against other drivers</JATOText>
        <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={data}>
                <defs>
                    <linearGradient id="youColour" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#e28082" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#e28082" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="othersColour" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#D4E6F1" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#D4E6F1" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="you" stroke="#C40005" fillOpacity={1} fill="url(#youColour)" />
                <Area type="monotone" dataKey="others" stroke="#4392B5" fillOpacity={1} fill="url(#othersColour)" />
            </AreaChart>
        </ResponsiveContainer>
    </JATOBasicCard>
}

export default Page3;