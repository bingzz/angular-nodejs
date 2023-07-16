import { connect, ConnectOptions } from 'mongoose';

const connectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

export const dbConnect = () => {
  connect(process.env.MONGO_URI!, connectOptions as ConnectOptions)
    .then(
      () => console.log('Connection to MongoDB -> Success'), 
      (error) => console.error(error))
}