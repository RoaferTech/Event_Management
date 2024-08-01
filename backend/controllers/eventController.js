const Event = require('../models/Events');

const getEvents = async (req, res) => {
  try {
    const events = await Event.find({ user: req.user.id });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const createEvent = async (req, res) => {
  const { title, description, date } = req.body;
  try {
    const newEvent = new Event({
      title,
      description,
      date,
      user: req.user.id,
    });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { title, description, date } = req.body;
  try {
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    if (event.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }
    event.title = title;
    event.description = description;
    event.date = date;
    await event.save();
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Event.findByIdAndDelete(id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    if (event.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }
    res.json({ message: 'Event removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getEvents, createEvent, updateEvent, deleteEvent };
