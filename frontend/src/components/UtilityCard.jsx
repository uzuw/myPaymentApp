import React from 'react';

const UtilityCard = ({ util, title }) => {
  return (
    <div className="p-5 w-1/10 h-max rounded-lg flex flex-col items-center justify-center text-center shadow-sm hover:shadow-lg transition-shadow duration-200">
      <div className="mb-3 text-4xl text-green-600">
        {util}
      </div>
      <div className="text-lg font-semibold text-gray-700">
        {title}
      </div>
    </div>
  );
};

export default UtilityCard;
