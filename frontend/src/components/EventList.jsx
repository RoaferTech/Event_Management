import React from "react";
import eventService from "../services/eventService";

const EventList = ({ events, getEvents, setCurrentEvent, setShowModal }) => {
  const handleEdit = (event) => {
    setCurrentEvent(event);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await eventService.deleteEvent(id);
      getEvents();
    } catch (error) {
      console.error("Failed to delete the event", error);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {events.length === 0 ? (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            No Events Available
          </h2>
          <p className="text-gray-600 mb-4">
            There are no events at the moment. Please create an event to get
            started.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Create Event
          </button>
        </div>
      ) : (
        <ul className="space-y-4">
          {events.map((event) => (
            <li
              key={event._id}
              className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {event.title}
              </h3>
              <p className="text-gray-700 mt-1">{event.description}</p>
              <p className="text-gray-600 mt-2">
                {new Date(event.date).toLocaleDateString()}
              </p>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => handleEdit(event)}
                  className="bg-yellow-500 text-white py-1 px-3 rounded-lg hover:bg-yellow-600 transition duration-300"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(event._id)}
                  className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition duration-300"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventList;
