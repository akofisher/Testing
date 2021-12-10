export const SET_USER = 'SET_USER'
export const ADD_USER = 'ADD_USER'
export const REMOVE_USER = 'REMOVE_USER'

export const setUser = (users) => {
  return {
    type: SET_USER,
    payload: users,
  }
}

export const addUser = (addedUsers, qty) => {
  return {
    type: ADD_USER,
    payload: addedUsers,
    qty,
  }
}

export const removeUser = (id) => {
  return {
    type: REMOVE_USER,
    payload: id,
  }
}
