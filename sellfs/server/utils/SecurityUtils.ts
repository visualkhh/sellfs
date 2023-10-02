import bcrypt from 'bcrypt';
import { environment } from '@server/environments/environment';

export class SecurityUtils {
    public static encodeBcrypt(normal: string, slatRounds = environment.security.bcrypt.saltRounds) {
        return bcrypt.hashSync(normal, environment.security.bcrypt.saltRounds);
    }
}
