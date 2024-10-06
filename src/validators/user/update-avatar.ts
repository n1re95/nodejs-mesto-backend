import { celebrate, Segments, Joi } from 'celebrate';

export const updateAvatar = celebrate({
  [Segments.BODY]: Joi.object().keys({
    avatar: Joi.string(),
  }),
});
