import { AuthType } from '@src/codes/AuthType';
import jwt, { SignOptions, VerifyErrors } from 'jsonwebtoken';
import { environment } from '../environments/environment';
import { RandomUtils } from 'simple-boot-core/utils/random/RandomUtils';
import { TokenError } from '@server/errors/TokenError';

export class TokenUtils {
    static warpAccessToken(access: string, type = 'Bearer') {
        return `${type} ${access}`;
    }

    static stripAccessToken(accessToken: string, type = 'Bearer') {
        return accessToken?.replace(RegExp(`^${type} `), '');
    }

    static generatorToken(authType: AuthType, option: SignOptions = environment.jwt.options as SignOptions) {
        const accessToken = jwt.sign({ authType}, environment.jwt.secretKey, option);
        const refreshToken = RandomUtils.uuid();
        return {
            accessToken,
            refreshToken
        }
    }


    static jwtVerify(token?: string, type = 'Bearer'): string | jwt.JwtPayload | never {
        if (!token) {
            throw new TokenError('token is undefined');
        }
        if (token && token.startsWith(type)) {
            token = TokenUtils.stripAccessToken(token);
        }

        return jwt.verify(token, environment.jwt.secretKey);
    }

    // static jwtVerifyCallBack(token: string, callBack: (e: VerifyErrors | null, decode: jwt.JwtPayload | undefined) => void, type = 'Bearer') {
    //     if (!token) {
    //         throw new TokenError('token is undefined');
    //     }
    //     if (token && token.startsWith(type)) {
    //         token = TokenUtils.stripAccessToken(token);
    //     }
    //
    //     jwt.verify(token, environment.jwt.secretKey, callBack);
    // }
}
