import { RequestTokenInterface } from './../../models/request-token.interface';

export class RequestToken {
    static readonly type = '[Auth] Request token';
    constructor(public payload: RequestTokenInterface) { }
}