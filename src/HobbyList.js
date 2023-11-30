import React from 'react';
import './HobbyList.css';

function HobbyList({ hobbies = [] }) {
  if (hobbies && hobbies.length) {
    const list = hobbies.map((hobby, index) => (
      <li key={index}>{hobby}</li>
    ));

    return (
      <div className="hobbies">
        <h4>Hobbies</h4>
        <ul>{list}</ul>
      </div>
    );
  }

  return null;
}

export default HobbyList;