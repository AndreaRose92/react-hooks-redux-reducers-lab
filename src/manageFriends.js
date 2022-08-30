const initialState = { friends: []}
let action = {
  type: "friends/add",
  payload: {
    name: "",
    hometown: '',
    id: 0
  }
}

export function manageFriends(state = initialState, action) {
  if (action.type === "friends/add") {
    return { friends: [...state.friends, action.payload] }
  } else if (action.type === "friends/remove") {
    return { friends: state.friends.filter( f => f.id !== action.payload ) }
  }
  return state
}
