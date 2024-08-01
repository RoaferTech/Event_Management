import React from "react";
import { useNavigate } from "react-router-dom";
import { upcommingEvent } from "../data/dummyData";

const Home = () => {
  const navigate = useNavigate();

  const handleCreateEvent = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="p-6 max-w-[1160px] mx-auto">
        <section className="bg-blue-500 text-white rounded-lg shadow-lg p-8 mb-6">
          <h2 className="text-3xl font-semibold mb-4">
            Welcome to Our Event Management System
          </h2>
          <p className="text-lg mb-4">
            Manage your events effortlessly with our easy-to-use platform.
            Create, update, and view events all in one place.
          </p>
          <button
            onClick={handleCreateEvent}
            className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 transition duration-300"
          >
            Create an Event
          </button>
        </section>
        <section>
          <h3 className="text-2xl font-semibold mb-4">Upcoming Events</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcommingEvent.map((event, index) => (
              <>
                <div className="bg-white rounded-lg shadow-md" key={index}>
                  <img src={event.imgUrl} alt="hiiiiiiiiiiii" />
                  <div className=" p-6">
                    <h4 className="text-lg font-semibold mb-2">
                      {event.title}
                    </h4>
                    <p className="text-gray-600 mb-2">{event.description}</p>
                    <p className="text-gray-500">{event.date}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
