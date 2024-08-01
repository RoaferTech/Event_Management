import React from "react";
import "../styles/EventCard.css";

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p>{new Date(event.date).toLocaleDateString()}</p>
      <button className="view-details">View Details</button>
    </div>
  );
};

export default EventCard;
