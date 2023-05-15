import { Column, ManyToOne, Entity, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from "./real_estate.entity";
import { User } from "./users.entity";


@Entity("schedules")
export class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date:  Date  | string;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => User, (User) => User.schedule)
  user: User;

  @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules)
  realEstate: RealEstate;
}


