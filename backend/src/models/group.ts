import {
  AllowNull,
  BelongsToMany,
  Column,
  DataType,
  Default,
  HasMany,
  Index,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import Meeting from "./meeting";

@Table({
  underscored: true,
})
export default class Group extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @AllowNull(false)
  @Column
  name: string;

  @HasMany(() => Meeting, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  meetings: Meeting[];
}
