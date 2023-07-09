import User from "../models/userModel.js"

const getUsers = async (req, res)=> {
    const usuarios = await User.find();
    res.json(usuarios);
}

const getUser = async (req, res)=> {
    console.log(req.params)
    //res.json({"usuario params":req.params})
    try { 
        const {email} = req.params;
        
        //Buscar un usuario por su email en la base de datos
        const usuario = await User.findOne({email:email});

        if (!usuario) { 
            return res.status(404).json({message: 'Usuario no encontrado'})
        }
        //Enviar una respuesta al cliente
        res.status(200).json({"200": "Usuario encontrado:", usuario});
    } catch (error) { 
        console.error(error);
        res.status(500).json({ message: '500, Ha ocurrido un error al obtener el usuario', "error": error});
    }
}

const userInsert = async (req, res)=> {
    console.log(req.body)
    // const user = req.body
    // const {email, password} = user; 
    // console.log(`Los datos enviados son ${email} y ${password}`)
    // res.json(user)
    try {
        const { email, password } = req.body;

        //instancia un usuario con el modelo User con los datos a insertar
        const user = new User({email:email,password:password});
    
        const usuario = await user.save();

        //   Enviar una respuesta al cliente
        res.status(200).json({"200": "Registro insertado...", usuario});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '500, Ha ocurrido un error al insertar el usuario' });
    };
}

const userUpdate = async (req, res)=> {
    try {
        const { email } = req.params;
        const { password } = req.body;

        //Buscar un usuario por su Email en la base de datos
        const user = await User.findOne({email});
        console.log(user)
        if (!user) {
            return res.status(404).json({message: 'Usuario no encontrado'});
        }
        //Actualiza el correo electronico y la contraseña del usuario
        if (password) { 
            user.password = password;
        }
        const usuario = await user.save();

        //  Enviar una respuesta al cliente
        res.status(200).json({"200": "Registro actualizado...", usuario});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '500, Ha ocurrido un error al actualizar el usuario' });
    };
}

const userDelete =  async (req, res)=> {
    try {
        const { email } = req.params;

        //Buscar un usuario por su Email en la base de datos
        const user = await User.findOne({email});
        console.log(user)
        if (!user) {
            return res.status(404).json({message: 'Usuario no encontrado'});
        }
        //Eliminar el usuario de la base de datos
        await user.deleteOne();

        //  Enviar una respuesta al cliente
        res.status(200).json({"200": "Usuario eliminado..."});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '500, Ha ocurrido un error al eliminar el usuario' });
    };
}

export { 
    getUsers,
    getUser,
    userInsert,
    userUpdate,
    userDelete
}