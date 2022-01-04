import {UserType} from '../HW8';

type SortUpType = {
    type: 'sort'
    payload: 'up'
}

type SortDownType = {
    type: 'sort'
    payload: 'down'
}

type CheckType = {
    type: 'check'
    payload: number
}

type ActionType = SortUpType | SortDownType | CheckType

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { //fix any
    switch (action.type) {
        case 'sort': {
            if(action.payload==='up'){
              return  state.sort((a,b)=>a.name.localeCompare(b.name))
            } else if(action.payload==='down'){
              return  state.sort((a,b)=>b.name.localeCompare(a.name))
            } else return state
            // need to fix

        }

        case 'check': {
            // need to fix
            return state.filter(s => s.age >= action.payload)
        }
        default:
            return state
    }
}