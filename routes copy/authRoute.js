import express from 'express'
import { taskController, registerController, loginController, viewTaskController, deleteTaskController } from '../controllers/authController.js'

const router = express.Router()

// method post for sending data into DB
router.post('/taskRegister', taskController)
router.post('/registerUser', registerController)

// Method to login
router.post("/login", loginController)

// Method to get task
router.get("/viewTask", viewTaskController)

// Method to delete task by one
router.delete("/deleteTask/:id", deleteTaskController)


export default router 

