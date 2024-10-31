import e from "express";
import vehicleControllers from "../controllers/vehicle-controllers.js";

const router = e.Router();

router.post('/', vehicleControllers.store);

export default router;