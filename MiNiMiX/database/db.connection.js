import mongoose from 'mongoose';

// Connect to the database

function connectDb() {
    return mongoose.connect(process.env.MONGODB_URI) 
}


export default connectDb;