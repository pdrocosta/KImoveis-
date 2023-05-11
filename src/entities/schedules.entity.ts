import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'
import { User } from './users.entity'
import { RealEstate } from './real_estate.entity'

@Entity("schedules")
export class Schedule {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', length: 45 })
    date: Date

    @Column({ type: 'time' })
    hour: string

    @ManyToOne(() => User, (user) => user.schedules)
    userId: User

    @ManyToOne(() => RealEstate, (realEstate) => realEstate.realEstateId)
    realEstateId: User

}
