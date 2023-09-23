import React from 'react'

export default function Good(props) {
  return (
    <div div className="container card p-4 mt-3  register-continer"> 
      <h1>{props.name}</h1>
      <h2>Thank You and  Verification link is sent to {props.email}</h2>
    </div>
  );
}
