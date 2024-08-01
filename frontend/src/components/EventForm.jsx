import React, { useState, useEffect } from "react";
import eventService from "../services/eventService";

const EventForm = ({ getEvents, currentEvent, setCurrentEvent }) => {
  const [title, setTitle] = useState(currentEvent ? currentEvent.title : "");
  const [description, setDescription] = useState(
    currentEvent ? currentEvent.description : ""
  );
  const [date, setDate] = useState(currentEvent ? currentEvent.date : "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentEvent) {
      await eventService.updateEvent(currentEvent._id, {
        title,
        description,
        date,
      });
      setCurrentEvent(null);
    } else {
      await eventService.createEvent({ title, description, date });
    }
    getEvents();
    setTitle("");
    setDescription("");
    setDate("");
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg ">
      <h2 className="text-lg font-semibold mb-4">
        {currentEvent ? "Update Event" : "Create Event"}
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-4 p-2 border rounded w-full"
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mb-4 p-2 border rounded w-full"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mb-4 p-2 border rounded w-full"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        >
          {currentEvent ? "Update Event" : "Create Event"}
        </button>
      </form>
    </div>
  );
};

export default EventForm;
