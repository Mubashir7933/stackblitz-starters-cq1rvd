import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    diagnosedWith: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    age: {
        type: String,
        required: true
    },

    bloodGroup: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        enum: ["M", "F"], // Assuming "M" stands for Male and "F" for Female
        required: true
    },

    admittedIn: {
        type: mongoose.Schema.Types.ObjectId, // Fixed the typo here
        ref: "Hospital"
    }
}, { timestamps: true });

export const Patient = mongoose.model("Patient", patientSchema);
import mongoose from "mongoose";

