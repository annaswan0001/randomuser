import * as actionsType from '../actions/actionTypes'

const initialState = {
    usersData:[],
    userData:[],
    loading:false,
    error:false,
    filter:"",
    
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionsType.USERS_FETCH_START:{
            return{
                ...state, loading:true, error:false
            }
        }
        case actionsType.USERS_FETCH_SUCCESS:{
            return{
                ...state, 
                loading:false, 
               usersData:[...state.usersData,...action.users]
            }
        }
        case actionsType.USERS_FETCH_FAIL:{
            return{
                ...state, 
               loading:false, 
               error:true
            }
        }
        case actionsType.USERS_RESET:{
            return{
                ...state, 
               usersData:[]
            }
        }
        case actionsType.USERS_FILTER:{
            return{
                ...state,
                filter:action.filter
            }
        }
        case actionsType.USER_FETCH_START:{
            return{
                ...state, loading:true, error:false
            }
        }
        case actionsType.USER_FETCH_SUCCESS:{
            return{
                ...state, 
                loading:false, 
               userData:action.user
            }
        }
        case actionsType.USER_FETCH_FAIL:{
            return{
                ...state, 
               loading:false, 
               error:true
            }
        }
    default:
        return state
    }
}


