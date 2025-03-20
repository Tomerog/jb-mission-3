import { NextFunction, Request, Response } from "express";
import Group from "../../models/group";
import Meeting from "../../models/meeting";


export async function getPerGroup(
  req: Request<{ groupId }>,
  res: Response,
  next: NextFunction
) {
  try {
    const { groupId } = req.params;
    const group = await Group.findByPk(groupId, {
      include: [Meeting],
    });
    res.json(group.meetings);
  } catch (e) {
    next(e);
  }
}

export async function add(
  req: Request<
    {},
    {},
    {
      groupId: string;
      meetingStart: Date;
      meetingEnd: Date;
      description: string;
      roomName:string;
    }
  >,
  res: Response,
  next: NextFunction
) {
  try {
    const newMeeting = await Meeting.create({ ...req.body });
    res.json(newMeeting);
  } catch (e) {
    next(e);
  }
}

