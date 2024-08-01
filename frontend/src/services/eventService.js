import axios from 'axios';

const API_URL = "http://localhost:5000/api/events/";

const getEvents = async () => {
  const response = await axios.get(API_URL, {
    headers: {
      'x-auth-token': JSON.parse(localStorage.getItem('user')).token,
    },
  });
  return response.data;
};

const createEvent = async (eventData) => {
  const response = await axios.post(API_URL, eventData, {
    headers: {
      'x-auth-token': JSON.parse(localStorage.getItem('user')).token,
    },
  });
  return response.data;
};

const updateEvent = async (id, eventData) => {
  const response = await axios.put(`${API_URL}${id}`, eventData, {
    headers: {
      'x-auth-token': JSON.parse(localStorage.getItem('user')).token,
    },
  });
  return response.data;
};

const deleteEvent = async (id) => {
  const response = await axios.delete(`${API_URL}${id}`, {
    headers: {
      'x-auth-token': JSON.parse(localStorage.getItem('user')).token,
    },
  });
  return response.data;
};

const eventService = { getEvents, createEvent, updateEvent, deleteEvent };
export default eventService;
