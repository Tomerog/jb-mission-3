import { Sequelize } from "sequelize-typescript";
import config from "config";
import Group from "../models/group";
import Meeting from "../models/meeting";

const logging = config.get<boolean>("sequelize.logging") ? console.log : false;

const sequelize = new Sequelize({
  models: [Group, Meeting],
  dialect: "mysql",
  ...config.get("db"),
  logging,
});

export default sequelize;
