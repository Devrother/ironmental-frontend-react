import { StateTypes, ActionTypes } from 'src/types'

export const START_AUTH_LOADING = 'auth/START_AUTH_LOADING' as const
export const END_AUTH_LOADING = 'auth/END_AUTH_LOADING' as const
export const SEND_AUTH_CONFIRM = 'auth/SEND_AUTH_CONFIRM' as const
export const SEND_AUTH_CONFIRM_SUCCESS = 'auth/SEND_AUTH_CONFIRM_SUCCESS' as const
export const SEND_AUTH_CONFIRM_FAILURE = 'auth/SEND_AUTH_CONFIRM_FAILURE' as const

export const startAuthLoading = () => ({ type: START_AUTH_LOADING })
export const endAuthLoading = () => ({ type: END_AUTH_LOADING })
export const sendAuthConfirm = (subscriberId: string) => ({
  type: SEND_AUTH_CONFIRM,
  payload: { subscriberId },
})
export const sendAuthConfirmSuccess = (message: string) => ({
  type: SEND_AUTH_CONFIRM_SUCCESS,
  payload: { message },
})
export const sendAuthConfirmFailure = (error: Error) => ({
  type: SEND_AUTH_CONFIRM_FAILURE,
  payload: { error },
})

const initialState: StateTypes.AuthState = {
  error: null,
  loading: false,
  result: { message: '' },
}

export const authReducer = (
  state: StateTypes.AuthState = initialState,
  action: ActionTypes.Auth
) => {
  switch (action.type) {
    case START_AUTH_LOADING: {
      return { ...state, loading: true }
    }
    case END_AUTH_LOADING: {
      return { ...state, loading: false }
    }
    case SEND_AUTH_CONFIRM_SUCCESS: {
      const { message } = action.payload
      return { ...state, result: { message } }
    }
    case SEND_AUTH_CONFIRM_FAILURE: {
      const { error } = action.payload
      return { ...state, error }
    }
    default:
      return state
  }
}
