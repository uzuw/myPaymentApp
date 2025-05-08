import React from 'react';
import UtilityCard from '../components/UtilityCard';
import utilities from '../data/utilities';



const Home = () => {

  return (
    <div className="m-5 shadow-md shadow-gray-100 rounded-lg p-10 border border-gray-100">
      <h2 className="font-recursive font-bold text-xl">Your Home Utilities</h2>
      <div className=" mt-10 rounded-lg flex gap-10 flex-wrap">
        {utilities.map((utility, index) => (
          <UtilityCard key={index} util={utility.util} title={utility.title} />
        ))}
      </div>
    </div>
  );
};

export default Home;


