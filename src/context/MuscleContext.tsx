'use client';
import React, { useState, type ReactNode } from 'react';
import { createContext } from 'react';

export const MuscleContext = createContext({});

const MuscleProvider = ({children}: {children: ReactNode}) => {
    const [plan, setPlan] = useState([]);
    const [save, setSave] = useState([]);

    const sharedData = {
        plan,
        setPlan,
        save,
        setSave,
    }

    return (<MuscleContext.Provider value={sharedData}>
        {children}
    </MuscleContext.Provider>
    )
};

export default MuscleProvider;