'use client';
import { MuscleContext } from '@/context/MuscleContext';
import type { IMuscle } from '@/types/muscle.type';
import React, { useContext } from 'react';

const SaveListButton = ({muscle}: {muscle: IMuscle}) => {

    const {save, setSave} = useContext(MuscleContext);

    const musclesProvider = useContext(MuscleContext);

    console.log(musclesProvider, "musclesprovider");

    const handleSetSave = ()=>{
        console.log("today plan button trigerred", muscle);
        setSave([...save, muscle]);
        alert(`you have read "${muscle.name}"`)
    }
    return (
        <div>
              <button className="btn min-h-0 h-auto border border-[#30343b] bg-transparent px-5 py-3 text-xs font-medium text-gray-300 hover:border-gray-500 hover:bg-transparent"
              onClick={()=>handleSetSave}>
                ♡ Save for later
              </button>
        </div>
    );
};

export default SaveListButton;