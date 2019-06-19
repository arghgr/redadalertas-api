import mongoose from 'mongoose';
import Boom from 'boom';
import Bounce from 'bounce';
import { logErr } from '../../shared/utils';
import deviceStore from '../stores/deviceStore';

const ObjectId = mongoose.Types.ObjectId;

const deviceController = {
  async createDevice(req, h) {
    let device;
    try {
      device = await deviceStore.createDevice(req.payload);
      if (!device) throw new Error("Device returned empty.");
      const response = h.response(device);
      return response;
    } catch (err) {
      if (Bounce.isSystem(err)) logErr("deviceController createDevice error: ", err.message || err);
      return Boom.badRequest(err.message || "Error creating device.");
    }
  },
  async updateDevice(req, h) {
    let device;
    let updatedDevice;
    try {
      if (!req.payload || !req.payload._id) throw new Error("Did not receive valid information for update.");
      if (!ObjectId.isValid(req.payload._id)) throw new Error("Device ID is not valid.");
      device = await deviceStore.updateDevice(req.payload);
      if (!device) throw new Error("Device not found.");
      updatedDevice = await deviceStore.getDevice(device.id);
      const response = h.response(updatedDevice);
      return response;
    } catch (err) {
      if (Bounce.isSystem(err)) logErr("deviceController updateDevice error: ", err.message || err);
      return Boom.badRequest(err.message || "Error updating device.");
    }
  },
  async getAllDevices(req, h) {
    let devices;
    try {
      devices = await deviceStore.getAllDevices();
      if (!devices) throw new Error("No devices found.");
      const response = h.response(devices);
      return response;
    } catch (err) {
      if (Bounce.isSystem(err)) logErr("deviceController getAllDevices error: ", err.message || err);
      return Boom.badRequest(err.message || "Error retrieving devices.");
    }
  },
  async getDevice(req, h) {
    let device;
    try {
      device = await deviceStore.getDevice(ObjectId(req.params.deviceID));
      if (!device) throw new Error("No device found.");
      const response = h.response(device);
      return response;
    } catch (err) {
      if (Bounce.isSystem(err)) logErr("deviceController getDevice error: ", err.message || err);
      return Boom.badRequest(err.message || "Error retrieving device.");
    }
  },
  async deleteDevice(req, h) {
    let device;
    try {
      device = await deviceStore.deleteDevice(ObjectId(req.params.deviceID));
      if (!device) throw new Error("Device not found.");
      const response = h.response(device);
      return response;
    } catch (err) {
      if (Bounce.isSystem(err)) logErr("deviceController deleteDevice error: ", err.message || err);
      return Boom.badRequest(err.message || "Error deleting device.");
    }
  },
};

export default deviceController;
