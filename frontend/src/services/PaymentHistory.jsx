import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const url='http://localhost:5000/api/payments';
        const token='e128ea9f-67e0-4865-8f06-df73dfec4250';
        const res=await axios.get(url, {
          headers: {
            'x-session-token': token
          }
        });

        setPayments(res.data);
      } catch (err) {
        console.error('Error fetching the payment history', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-semibold mb-6">Payment History</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-4">
          {payments.map((payment) => (
            <li key={payment._id} className="p-4 border rounded-lg shadow-sm">
              <p><strong>Utility:</strong> {payment.utilityType}</p>
              <p><strong>Amount:</strong> Rs. {payment.amount}</p>
              <p><strong>Date:</strong> {new Date(payment.paidAt).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PaymentHistory;
