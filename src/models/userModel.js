import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    }
);

//Crea una colección llamada User, con la estructura del schema(los campos de la colección)
const User = mongoose.model('User', userSchema);

export default User;