import deviceController from '../../controllers/deviceController';

export default [
  {
    method: 'POST',
    path: '/device',
    handler: deviceController.createDevice,
  },
  {
    method: 'PUT',
    path: '/device',
    handler: deviceController.updateDevice,
  },
  {
    method: 'GET',
    path: '/devices',
    handler: deviceController.getAllDevices,
  },
  {
    method: 'GET',
    path: '/device/{deviceID}',
    handler: deviceController.getDevice,
  },
  {
    method: 'DELETE',
    path: '/device/{deviceID}',
    handler: deviceController.deleteDevice
  }
];
