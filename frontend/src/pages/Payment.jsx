import React from 'react'
import UserPaymentInfo from '../services/UserPaymentInfo';

const Payment = () => {

  return (
    <div className="m-5 shadow-md shadow-gray-100 rounded-lg p-10 border border-gray-100">
      <h2 className="font-recursive font-bold text-xl">Payments</h2>
      <div className=" mt-10 rounded-lg flex gap-10 flex-wrap">
        <UserPaymentInfo token={"12345"}/>
      </div>
    </div>
  );
};

export default Payment;


