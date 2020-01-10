const initialState = {
  items: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD":
      return {
        ...state,
        items: [...state.items, { id: Math.random(), todo: payload }]
      }

    case "DELETE":
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload)
      }

    default:
      return state
  }
}
