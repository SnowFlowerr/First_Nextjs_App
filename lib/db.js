import mongoose from "mongoose";

export default function connectDB() {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });
}