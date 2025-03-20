import { NextFunction, Request, Response } from "express";
import Group from "../../models/group";


export async function getAll(req: Request, res: Response, next: NextFunction) {
  const group = await Group.findAll();
  res.json(group);
}
