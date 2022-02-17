import Event from "../models/events.js";



export const getEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json({
            events
        });
        
    } catch (error) {
        res.status(500).json({
            message: "Error getting events",
            error: error.message
        });
    }
        
    }

    export const createEvent = async (req, res) => {
        const { title, description, location, image, createdBy } = req.body;
        try {
            const event = await Event.create({
                title,
                description,
                location,
                image,
                createdBy
            });
            res.status(201).json({
                event
            });
            
        } catch (error) {   
            res.status(500).json({
                message: "Error creating event",
                error: error.message
            });
        }
   }