import mongoose from 'mongoose';


const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    
    location: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    
},
{timestamps: true}
);

const Event= mongoose.model("Event", eventSchema);
export default Event;
