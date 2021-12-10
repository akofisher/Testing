import { combineReducers } from 'redux'
import users from './users/userReducer'
import addedUsers from './users/userReducer'

const rootReducer = combineReducers({
  users,
  addedUsers,
})

export default rootReducer
