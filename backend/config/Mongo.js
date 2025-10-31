import mongoose from "mongoose";

const connectToMongo = async () => {

    mongoose.connection.on('connected', () => {
        console.log("MongoDB connected successfully");
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/Visgen_AI`)
}

export default connectToMongo;