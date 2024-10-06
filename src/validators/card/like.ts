import { celebrate, Segments, Joi } from 'celebrate';

export const like = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().length(24).required(),
  }),
});
