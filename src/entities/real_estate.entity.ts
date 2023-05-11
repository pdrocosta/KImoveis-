import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    ManyToMany,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'
import { Category } from './categories.entity'
import { Schedule } from './schedules.entity'
import { scheduler } from 'timers/promises'

@Entity("real_estate")
export class RealEstate {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
    sold: number;

    @Column({ type: 'int' })
    size: number;

    @CreateDateColumn({ type: 'date', nullable: true })
    createdAt: Date;

    @UpdateDateColumn({ type: 'varchar', length: 120 })
    updatedAt: string;

    @OneToMany(() => Schedule, (schedules) => schedules.realEstateId)
    realEstateId: Schedule[]

    @ManyToMany(() => Category, (categories) => categories.id)
    categoryId: Category[]
}
