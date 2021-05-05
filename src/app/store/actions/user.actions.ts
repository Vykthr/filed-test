import { Action } from '@ngrx/store';

export const SET_USER_DETAILS = '[User] set';


export class SetUserDetails implements Action {
    readonly type = SET_USER_DETAILS;
    constructor(public payload: any) {}
}

export type All = SetUserDetails