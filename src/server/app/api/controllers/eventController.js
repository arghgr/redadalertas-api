import Boom from 'boom';
import eventStore from '../stores/eventStore';

const eventController = {
  async createEvent(req, h) {
    let event;
    try {
      event = await eventStore.createEvent(req.payload);
      const response = h.response(event);
      return response;
    } catch (err) {
      console.error("createEvent error: ", err);
      h.response(Boom.badRequest(err));
    }
  },
  async getEvents(req, h) {
    let events;
    try {
      events = await eventStore.getEvents();
      const response = h.response(events);
      return response;
    } catch (err) {
      console.error("getEvents error: ", err);
      h.response(Boom.badRequest(err));
    }
  },
};

export default eventController;
