import express, { Router } from "express";
import {
    createVehicle, getAllVehicle, updateVehicle,

} from "../controller/vehicle.controller";
import validationMiddleware from "../middleware/validation.middleware";
import {vehicleSchema, statusSchema} from "../validation/vehicle.validation";

const vehicleRoutes: Router = express.Router();


vehicleRoutes.route("/vehicle").get(getAllVehicle).post(validationMiddleware(vehicleSchema),createVehicle);
vehicleRoutes.route("/vehicle/:id").put(validationMiddleware(statusSchema),updateVehicle);



export default vehicleRoutes;
