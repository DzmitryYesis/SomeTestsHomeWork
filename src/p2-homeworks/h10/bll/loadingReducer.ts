const initState = {
    changeLoading: false
}


type LoadingActionType = {
    type: 'CHANGE-LOADING'
    changeLoading: boolean
}

type ActionType = LoadingActionType

export const loadingReducer = (state = initState, action: ActionType): typeof initState=> { // fix any
    switch (action.type) {
        case 'CHANGE-LOADING': {
            return {...state, changeLoading: action.changeLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): LoadingActionType => {
    return {type: 'CHANGE-LOADING', changeLoading:isLoading}
} // fix any