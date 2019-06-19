import userRoutes from './user';
import eventRoutes from './events';
import alertRoutes from './alerts';
import sessionRoutes from './session';
import authRoutes from './auth';
import deviceRoutes from './device';

export default [].concat(
  userRoutes,
  eventRoutes,
  alertRoutes,
  sessionRoutes,
  authRoutes,
  deviceRoutes
);
