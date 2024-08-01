import React, { useState, useEffect } from "react";
import eventService from "../services/eventService";
import EventList from "../components/EventList";
import EventForm from "../components/EventForm";
import Modal from "../components/Modal"; // Import the Modal component

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const getEvents = async () => {
    const events = await eventService.getEvents();
    setEvents(events);
  };

  useEffect(() => {
    getEvents();
  }, []);

  const handleCreateEvent = () => {
    setCurrentEvent(null);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Event Dashboard</h1>

      {/* Create Event Button */}
      <div className="mb-6">
        <button
          onClick={handleCreateEvent}
          className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 text-lg"
        >
          Create Event
        </button>
      </div>

      {/* Event List Section */}
      <section className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Upcoming Events
        </h2>
        <EventList
          events={events}
          getEvents={getEvents}
          setCurrentEvent={setCurrentEvent}
          setShowModal={setShowModal} // Pass setShowModal to EventList for editing events
        />
      </section>

      {/* Modal for Event Form */}
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <EventForm
            getEvents={getEvents}
            currentEvent={currentEvent}
            setCurrentEvent={setCurrentEvent}
            onClose={handleCloseModal} // Pass onClose to EventForm to close the modal after submission
          />
        </Modal>
      )}
    </div>
  );
};

export default Dashboard;
