import React from 'react';

const UserCard = ({ name, email, age, phone }) => {
  return (
    <>
      <div>
        <h2>{name}</h2>
      </div>
      <div>
        <p>Email: {email}</p>
        <p>Age: {age}</p>
        <p>Phone: {phone}</p>
      </div>
    </>
  );
}

export default UserCard;
