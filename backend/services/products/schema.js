import {Joi} from "celebrate";

const createProductPayload = Joi.object().keys({
  name: Joi.string().required(),
  quantity: Joi.number().min(0).required(),
  price: Joi.string().required()
});

export {createProductPayload};
