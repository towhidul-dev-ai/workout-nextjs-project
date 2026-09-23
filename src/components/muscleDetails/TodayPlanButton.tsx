'use client';
import { MuscleContext } from '@/context/MuscleContext';
import type { IMuscle } from '@/types/muscle.type';
import React, { useContext } from 'react';

const TodayPlanButton = ({muscle}: {muscle: IMuscle}) => {

    const {plan, setPlan} = useContext(MuscleContext);

    const musclesProvider = useContext(MuscleContext);

    console.log(musclesProvider, "musclesprovider");

    const handleTodayPlan = ()=>{
        console.log("today plan button trigerred", muscle);
        setPlan([...plan, muscle]);
        alert(`you have read "${muscle.name}"`)
    }
    return (
        <div>
            <button className="btn min-h-0 h-auto border-0 bg-[#ccff00] px-5 py-3 text-xs font-bold text-black hover:bg-[#b8e600]"
             onClick={()=>handleTodayPlan()}>
                🗓 Add to today's plan
              </button>
        </div>
    );
};

export default TodayPlanButton;