import React, { useEffect, useState } from 'react'

const UserPaymentInfo = ({token}) => {

    // const [userPayment,setUserPayemnt]=useState([""]);
    // useEffect(()=>{
    //     setUserPayemnt();
    // },[token])

  return (
    <div>
      payment details fecthed from api weith id {token}
    </div>
  )
}

export default UserPaymentInfo

