import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import Group from "./group";

@Table({
  underscored: true,
})
export default class Meeting extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @ForeignKey(() => Group)
  @AllowNull(false)
  @Column(DataType.UUID)
  groupId: string;

  @AllowNull(false)
  @Column(DataType.DATE)
  meetingStart: Date;

  @AllowNull(false)
  @Column(DataType.DATE)
  meetingEnd: Date;

  @AllowNull(false)
  @Column
  description: string;

  @AllowNull(false)
  @Column
  roomName: string;

  @BelongsTo(() => Group)
  Group: Group;
}
