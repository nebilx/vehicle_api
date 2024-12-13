import VehicleModel from "../model/vehicle.model";
import {Request,Response,NextFunction} from "express";
import {handleRequestError} from "../utils/index.utils";
import vehicleModel from "../model/vehicle.model";


export const getAllVehicle = async (_req: Request, res: Response,next:NextFunction):Promise<void> => {

        try{
    const vehicle = await vehicleModel.find();

    if(!vehicle){
        throw {status: 400, message: 'Vehicle  Not Found'};
    }
     res.status(200).json({data: vehicle});
}
catch (e:{message:string;status:number}|unknown) {
    const { status, message } = handleRequestError(e, next);
    return next({ status, message });

}

};

export const createVehicle = async (req: Request, res: Response,next:NextFunction):Promise<void> => {

    try{

        const {name, status} = req.body;

    const vehicleExist = await VehicleModel.findOne({name})
    if (vehicleExist) {
        throw {status: 400, message: 'Vehicle Already exist'};
    }

    const vehicle = new VehicleModel({name,status});

    await vehicle.save();

         res.status(201).json({ message: `Vehicle Created Successfully` });
    }
    catch (e:{message:string;status:number}|unknown) {
        const { status, message } = handleRequestError(e, next);
        return next({ status, message });

    }

};

export const updateVehicle = async (req: Request, res: Response,next:NextFunction):Promise<void> => {
    const {id} = req.params;
        const _id =id
    if (!_id) {
        throw {status: 400, message: 'Vehicle Id Required'};
    }
    try {

        const {status} = req.body;


        const vehicle = await VehicleModel.findByIdAndUpdate(_id,
        { status, lastUpdated: Date.now() },
        { new: true } );

        if (!vehicle) {
            throw {status: 400, message: 'Vehicle  Not Found'};
        }
         res.status(200).json({message: `Vehicle Status Updated Successfully`});

    } catch (e: { message: string; status: number } | unknown) {

        const {status, message} = handleRequestError(e, next);
        return next({status, message})

    }


};



