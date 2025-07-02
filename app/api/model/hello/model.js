import mongoose from "mongoose";

const stud=new mongoose.Schema({
    name: {
        type: String,
        required: false,
    },
    age: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    },
});

const Student = mongoose.models.Student || mongoose.model("Student", stud);

export default Student;