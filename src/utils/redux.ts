export const createRequestActionTypes = (type: string): string[] => {
  const SUCCESS = `${type}_SUCCESS`
  const FAILURE = `${type}_FAILURE`
  return [type, SUCCESS, FAILURE]
}

// export function createReducer<S, A>(
//   initialState: S,
//   handlerMap: {
//     [key in typeof A['type']]: (state: S, action: A) => void
//   }
// ) {
//   return function(state: S = initialState, action: A) {
//     if (handlerMap.hasOwnProperty(action.type)) {
//       return handlerMap[action.type](state, action)
//     } else {
//       return state
//     }
//   }
// }
