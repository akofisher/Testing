import { SET_USER, ADD_USER, REMOVE_USER } from './userActionsCreator'

const initialState = {
  users: {},
  addedUsers: [],
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        users: action.payload,
      }
    case ADD_USER:
      return {
        ...state,
        addedUsers: [
          ...state.addedUsers,
          { ...action.payload, qty: action.payload.qty },
        ],
      }

    case REMOVE_USER:
      return {
        ...state,
        addedUsers: state.addedUsers.filter(
          (data) => data.id !== action.payload,
        ),
      }

    default:
      return state
  }
}
