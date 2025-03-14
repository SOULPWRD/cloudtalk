import {Joi} from "celebrate";

const createProductPayload = Joi.object().keys({
  name: Joi.string().required(),
  quantity: Joi.number().greater(0).required(),
  price: Joi.number().required().greater(0).required()
});

const productParam = Joi.object({
  id: Joi.string().uuid().required()
});

const updateProductPayload = Joi.object({
  name: Joi.string().optional(),
  quantity: Joi.number().greater(0).optional(),
  price: Joi.number().optional().greater(0).optional()
});

export {createProductPayload, productParam, updateProductPayload};
