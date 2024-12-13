import mongoose,{Schema} from 'mongoose';
import {vehicleType} from "../types/index.types";
const vehicleSchema:Schema = new Schema({
    name: {type:String, required:[true, 'name is required'],trim:true},
    status: {type:Boolean, required:[true, 'status is required']},
    LastUpdated: {type:Date, dafault:Date.now},
},{timestamps:true});

const vehicle = mongoose.model<vehicleType>('Vehicle', vehicleSchema);
export default vehicle;
