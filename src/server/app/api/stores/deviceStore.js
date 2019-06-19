import { Device } from '../../shared/models';

const deviceStore = {
  // TO-DO: fill in authLevel stubs
  async createDevice(payload) {
    return Device.create([{
      ...payload
    }], {
      authLevel: false
    });
  },
  updateDevice(payload) {
    return Device.findOneAndUpdate(
      { _id: payload._id },
      payload,
      { authLevel: false }
    );
  },
  getDevice(id) {
    return Device.findById(id);
  },
  getAllDevices() {
    return Device.find();
  },
  deleteDevice(id) {
    return Device.findOneAndDelete(
      { _id: id },
      { authLevel: false }
    );
  },
};

export default deviceStore;
