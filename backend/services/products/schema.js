import {Joi} from "celebrate";

const createProductPayload = Joi.object().keys({
  name: Joi.string().required(),
  quantity: Joi.number().min(0).required(),
  price: Joi.string().required()
});

const productParam = Joi.object({
  id: Joi.string().uuid().required()
});

const updateProductPayload = Joi.object({
  name: Joi.string().optional(),
  quantity: Joi.number().min(0).optional(),
  price: Joi.string().optional()
});

export {createProductPayload, productParam, updateProductPayload};
