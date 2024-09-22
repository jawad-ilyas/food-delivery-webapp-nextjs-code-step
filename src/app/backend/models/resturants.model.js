import mongoose from "mongoose";


const resturantSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Resturant Name is Required"]
    }
})


export const Resturant = mongoose.models.Resturant || mongoose.model("Resturant", resturantSchema);