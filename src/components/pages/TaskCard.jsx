import React from 'react';

function TaskCard({entityName,phone,contact,status}) {
  return (
    <div>
      <h1>EnityName{entityName}</h1>
      <h2>Phone{phone}</h2>
      <p>Contact{contact}</p>
      <p>{status?<h1>OPEN</h1>:<h1>CLOSED</h1>}</p>
    </div>
  );
}

export default TaskCard;
