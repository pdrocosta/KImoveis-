import "reflect-metadata"

import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'
import { Schedule } from './schedules.entity'
import { getRounds, hashSync } from "bcryptjs"

@Entity("users")
export class User {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', length: 45 })
    name: string

    @Column({ type: 'varchar', length: 45, unique: true })
    email: string

    @Column({ type: 'boolean', default: false })
    admin: boolean

    @Column({ type: 'varchar', length: 120 })
    password: string

    @CreateDateColumn({ type: 'date' })
    createdAt: Date

    @UpdateDateColumn({ type: 'date', nullable: true })
    updatedAt?: string

    @DeleteDateColumn({ nullable: true })
    deletedAt?: Date

    @OneToMany(() => Schedule, (schedules) => schedules.user)
    schedule: Schedule

    @BeforeInsert()
    @BeforeUpdate()
    transformPasswordHash() {
        const encrypted = getRounds(this.password);

        if (!encrypted) {
            this.password = hashSync(this.password, 10);
        }
    }
}

