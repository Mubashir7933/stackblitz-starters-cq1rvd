import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    diagonsedWith :{
        type: String,
        required: true
    },

    address :{
        type: String,
        required: true
    },


    age :{
        type: String,
        required: true
    },


    bloodGroup :{
        type: String,
        required: true
    },

    gender :{

    address :{
        type: String,
        enum : ["M",'F'],
        required: true
    },


    admittedIn :{
        type: mongoose.Schema.types.ObjectId,
        ref: "Hospital",
    },
    }
}, {timestamps: true})
export const Doctor = mongoose.model("Doctor", doctorSchema)