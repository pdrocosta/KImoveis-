import Address from "./addresses.entity"
import Category from "./categories.entity"
import {
   Column,
   OneToOne,
   PrimaryGeneratedColumn,
   CreateDateColumn,
   Entity,
   ManyToOne,
   UpdateDateColumn,
   JoinColumn,
   OneToMany,
} from "typeorm"
import { Schedule } from "./schedules.entity"


@Entity("real_estate")

export class RealEstate {
   @PrimaryGeneratedColumn("increment")
   id: number

   @Column({ type: "boolean", default: false })
   sold: boolean

   @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
   value: number | string

   @Column({ type: "integer" })
   size: number

   @CreateDateColumn({ type: "date" })
   createdAt: Date

   @UpdateDateColumn({ type: "date", nullable: true })
   updatedAt?: Date

   @OneToOne(() => Address, (Address) => Address.realEstate)
   @JoinColumn()
   address: Address

   @ManyToOne(() => Category)
   category: Category

   @OneToMany(() => Schedule, (Schedule) => Schedule.realEstate)
   schedules: Schedule[]
}

