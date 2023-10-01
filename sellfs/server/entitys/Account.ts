import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Auth } from '@server/entitys/Auth';
import { AuthType } from 'codes/AuthType';


@Entity('account')
export class Account  {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({nullable: true})
    email?: string;

    @Column({nullable: true})
    password?: string;

    @Column({name: 'find_password', nullable: true})
    findPassword?: string;

    @Column()
    use?: boolean;

    @Column({name: 'confirm_email_uuid', nullable: true})
    confirmEmailUUID?: string;

    @Column({name: 'is_confirm_email', default: false})
    isConfirmEmail?: boolean;

    @Column({name: 'refresh_token', nullable: true})
    refreshToken?: string;

    @Column({name: 'access_token', nullable: true})
    accessToken?: string;

    @Column({name: 'auth_type', nullable: true})
    authType?: AuthType;

    @ManyToOne(type => Auth)
    @JoinColumn({name: "auth_type"})
    auth?: Auth;



    @Column({name: 'created_at', default: () => 'CURRENT_TIMESTAMP'})
    createdAt?: Date;

    @Column({name: 'updated_at', default: () => 'CURRENT_TIMESTAMP'})
    updatedAt?: Date;


    constructor({id, accessToken, refreshToken, use, confirmEmailUUID, isConfirmEmail, password, findPassword, email, authType, createdAt, updatedAt}: { id?: number, accessToken?: string, refreshToken?: string, use?: boolean, confirmEmailUUID?: string, isConfirmEmail?: boolean, password?: string, findPassword?: string, email?: string, authType?: AuthType, createdAt?: Date, updatedAt?: Date } = {}) {
        this.id = id;
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        this.use = use;
        this.confirmEmailUUID = confirmEmailUUID;
        this.isConfirmEmail = isConfirmEmail;
        this.password = password;
        this.findPassword = findPassword;
        this.email = email;
        this.authType = authType;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }


}
