import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch (error) {
        console.error(error)
    } finally { 
        console.log('----- DB conectada ------');
    }
}
export default dbConnect;