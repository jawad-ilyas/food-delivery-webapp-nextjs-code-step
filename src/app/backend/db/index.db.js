import mongoose from "mongoose"

const { MONGODB_USERNAME, MONGODB_PASSWORD } = process.env

export const connectionDb = async () => {

    try {
        await mongoose.connect("mongodb+srv://" + MONGODB_USERNAME + ":" + MONGODB_PASSWORD + "@cluster0.145i1.mongodb.net/food-delivery-app?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true });
    } catch (error) {
        console.log("error into db connection ")
    }
}