import { Schema } from 'mongoose';

const deviceSchema = new Schema({
  firebaseId: {
    type: String,
    unique: true,
    required: true
  },
});

export default deviceSchema;
