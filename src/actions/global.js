import store from '../store'

export const GLOBAL_COUNT = 'GLOBAL_COUNT'

export const pushCount = count => {
  const dispatch = store.dispatch

  dispatch({
    type: GLOBAL_COUNT,
    count,
  })
}
