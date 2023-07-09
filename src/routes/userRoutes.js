import express from "express";
import { getUsers, getUser, userInsert, userUpdate, userDelete } from "../controllers/userController.js";

const router = express.Router()

// ejecutar el middleware json para entender datos json
router.use(express.json());

// rutas del que va a escuchar el servidor app
router.get("/index", (req, res) => {
    res.json("Pagina principal")
})

// rutas de usuarios
router.get("/", getUsers)

router.get("/:email", getUser)

router.post("/", userInsert)

router.patch("/:email", userUpdate)
router.delete("/:email", userDelete)

export default router;