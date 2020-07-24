import UserReducer from './user/user.reducer'
import {combineReducers} from 'react-redux'

export default combineReducers({
    user:UserReducer
})