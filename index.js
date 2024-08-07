import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import app from './src/app.js';

const { PORT, DATABASE } = process.env;

(async () => {
  try {
    await mongoose.connect(DATABASE);
    console.log('Connected to MongoDB Database')

    app.on('error', (error) => {
      console.error('Error starting server:', error)
    });

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`)
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
  }
})();



