import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'
import { User } from './users.entity'
import { Schedule } from './schedules.entity'
import { Category } from './categories.entity'

@Entity("adresses")
export class Adress {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'date' })
    street: Date

    @Column({ type: 'time', unique: true })
    hour: string

    @Column({ type: 'int' })
    realStateID: number

    @OneToOne(() => Adress, (adresses) => adresses.id)
    @JoinColumn()
    adressId: Adress

    @ManyToOne(() => Category, (categories => categories.id))
    @JoinColumn()
    categoryId: Adress
}
