

'use client';
import { MuscleContext } from '@/context/MuscleContext';
import React, { useContext } from 'react';

const WorkoutMuscles = () => {
    const {plan, save} = useContext(MuscleContext);
    console.log(plan, save);
    return (
        <div>
            WorkOut Page
        </div>
    );
};

export default WorkoutMuscles;