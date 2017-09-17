import {
  GLOBAL_COUNT,
} from '../actions/global'

const initState = {
  count: 0,
}

export default (state = initState, action) => {
  const {
    type,
    count,
  } = action

  switch (type) {
    case GLOBAL_COUNT:
      return Object.assign({}, state, {
        count,
      })
    default:
      return state
  }
}

