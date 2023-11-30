import React from "react";
import Activity from "./Activity";
import "./ActivityList.css";

function ActivityList({ activities = [] }) {
  if (activities && activities.length) {
    const activityComponents = activities.map((activity, index) => (
      <Activity key={index} {...activity} id={index} />
    ));

    return (
      <div className="activity-list-container">
        <h4>Activity List</h4>
        <ul className="activity-list">{activityComponents}</ul>
      </div>
    );
  }

  return null;
}

export default ActivityList;
