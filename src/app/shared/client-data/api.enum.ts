export enum APIEnum {
    // HEALTH
    GET_HEALTH = '/health',

    // AUTH
    POST_AUTH_REGISTER = '/auth/register',
    POST_AUTH_LOGIN = '/auth/login',
    GET_AUTH_VERIFY = '/auth/verify',
    POST_AUTH_SEND_LOGIN_EMAIL = '/auth/send-login-email',
    GET_AUTH_LOGIN_WITH_EMAIL = '/auth/login-with-email',
    GET_AUTH_TOKEN = '/auth/token',
    POST_AUTH_UPDATE_PASSWORD_SELF = '/auth/update-password/self',
}
