import React from "react";
import './ActivityList.css';

function Activity({ time, description, id }) {
  return (
    <li id={id} data-testid={`activity-${id}`}>
      <span data-testid={`activity-time-${id}`}>{time}</span>{" "}
      <span data-testid={`activity-description-${id}`}>{description}</span>
    </li>
  );
}

export default Activity;
