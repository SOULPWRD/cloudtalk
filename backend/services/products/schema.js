import {Joi} from "celebrate";

const createProductPayload = Joi.object().keys({
  name: Joi.string().required(),
  quantity: Joi.number().min(0).required(),
  price: Joi.string().required()
});

const deleteProductParam = Joi.object({
  id: Joi.string().uuid().required()
});

export {createProductPayload, deleteProductParam};
