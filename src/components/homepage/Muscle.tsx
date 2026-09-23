// import React from 'react';

// const getMuscle = async () =>{
//     const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
//     const data = await res.json();
//     return data;
// }

// const Muscles = async () => {
//     const muscleData = await getMuscle();
//     console.log(muscleData, "getAllMuscle");
//     return (
//         <section className='container mx-auto my-[70px]'>
//             Muscle

//          {muscleData.map((muscle, ind)=>{
//             return <div key={ind}>
//                 {muscle.name}
//             </div>
//          })}

//         </section>
//     );
// };

// export default Muscles;

import React from 'react';
import MuscleCard from "@/components/shared/MuscleCard";
import type { IMuscle } from '@/types/muscle.type';

const getMuscle = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch workout data");
  }

  const data = await res.json();

  return data;
};

const Muscles = async () => {
  const muscleData = await getMuscle();

  return (
    <section
      id="library"
      className="container mx-auto my-[70px] px-4"
    >
      {/* Section heading */}
      <div className="mb-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#ccff00]">
          Workout Library
        </p>

        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
              The Library
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            {muscleData.length} workouts
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {muscleData.map((muscle: IMuscle, ind: number) => (
          <MuscleCard key={ind} muscle={muscle} />
        ))}
      </div>
    </section>
  );
};

export default Muscles;