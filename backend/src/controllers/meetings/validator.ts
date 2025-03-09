import Joi from "joi";

export const newMeetingValidator = Joi.object({
  groupId: Joi.string().uuid().required(),
  meetingStart: Joi.date().required(),
  meetingEnd: Joi.date().required(),
  description: Joi.string().required(),
  roomName: Joi.string().min(0).required(),
});



export const getPerGroupValidator = Joi.object({
  groupId: Joi.string().uuid().required(),
});
