import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { AuthBase } from 'entitys/AuthBase';
import { AuthType } from 'codes/AuthType';
import { AuthUrl } from '@server/entitys/AuthUrl';
import { Account } from '@server/entitys/Account';
// import { Account2 } from '@server/entitys/Account2';

@Entity('auth')
export class Auth {

  @PrimaryColumn()
  type?: AuthType;

  @Column()
  name?: string;

  // @OneToMany(type => AuthUrl, authUrl => authUrl.auth)
  // authUrl?: AuthUrl[];
  @OneToMany('AuthUrl', 'auth')
  authUrl?: AuthUrl[];
  // @OneToMany(type => Account, account => account.auth)
  // accounts?: Account[];
  @OneToMany(type => Account, account => account.auth)
  accounts?: Account[];

  @Column({name: 'created_at', default: () => 'CURRENT_TIMESTAMP'})
  createdAt?: Date;

  @Column({name: 'updated_at', default: () => 'CURRENT_TIMESTAMP'})
  updatedAt?: Date;

  // constructor({type, name, createdAt, updatedAt}: { type?: AuthType, name?: string, createdAt?: Date, updatedAt?: Date } = {}) {
  //     this.type = type;
  //     this.name = name;
  //     this.createdAt = createdAt;
  //     this.updatedAt = updatedAt;
  // }
}
