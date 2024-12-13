import Joi from "joi";

export const vehicleSchema= Joi.object({
    name: Joi.string().min(3).max(50).required(),
    status: Joi.boolean().required(),
}
).options({abortEarly:true})

export const statusSchema = Joi.object({
    status:Joi.boolean()
}).options({abortEarly:true})

