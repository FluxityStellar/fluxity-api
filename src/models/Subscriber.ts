import { Document, Schema, model } from 'mongoose';

interface ISubscriber extends Document {
  email: string;
}

const subscriberSchema = new Schema<ISubscriber>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
  },
  { timestamps: true },
);

const Subscriber = model<ISubscriber>('Subscriber', subscriberSchema);

export default Subscriber;
