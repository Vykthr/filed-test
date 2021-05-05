import { User } from './../models/user.model';
import { SET_USER_DETAILS } from '../actions/user.actions'

const defaultState: User = {
    firstName: '',
    lastName: '',    
    phone: 0,
    email: '',
    budget: 0,
    country: ''
}

export function userReducer(state: User = defaultState , action: any) {
    switch (action.type) {
        case SET_USER_DETAILS: 
            return { ...state, ...action.payload };
        default: 
            return state;
    }
}