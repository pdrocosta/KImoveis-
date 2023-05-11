import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'
import { Schedule } from './schedules.entity'

@Entity("users")
export class User {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', length: 45 })
    name: string

    @Column({ type: 'varchar', length: 45, unique: true })
    email: string | undefined | null

    @Column({ type: 'boolean', default: false })
    admin: boolean

    @Column({ type: 'varchar', length: 120 })
    password: string

    @CreateDateColumn({ type: 'date', nullable: true })
    createdAt: string

    @UpdateDateColumn({ type: 'varchar', length: 120 })
    updatedAt: string

    @DeleteDateColumn({ type: 'date', nullable: true })
    deletedAt: string

    @OneToMany(() => Schedule, (schedules) => schedules.userId)
    schedules: Schedule

}
