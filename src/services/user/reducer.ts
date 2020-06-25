import { StateTypes, ActionTypes } from 'src/types'
import {
  SEND_LOGIN_SUCCESS,
  SEND_LOGIN_FAILURE,
  SEND_JOIN_SUCCESS,
  SEND_JOIN_FAILURE,
  START_USER_LOADING,
  END_USER_LOADING,
  SET_USER,
  CHECK_LOGGED_IN_SUCCESS,
  CHECK_LOGGED_IN_FAILURE,
  LOGOUT,
} from './actions'

const initialState: StateTypes.UserState = {
  loading: false,
  user: {
    userId: '',
    email: '',
    username: '',
  },
  error: null,
}

export const userReducer = (
  state: StateTypes.UserState = initialState,
  action: ActionTypes.User
) => {
  switch (action.type) {
    case SET_USER:
    case CHECK_LOGGED_IN_SUCCESS:
    case SEND_LOGIN_SUCCESS:
    case SEND_JOIN_SUCCESS: {
      const { user } = action.payload

      return { ...state, user, error: null }
    }

    case LOGOUT: {
      return { ...state, user: null }
    }

    case CHECK_LOGGED_IN_FAILURE:
    case SEND_LOGIN_FAILURE:
    case SEND_JOIN_FAILURE: {
      const { error } = action.payload

      return { ...state, user: null, error }
    }

    case START_USER_LOADING: {
      return { ...state, loading: true }
    }

    case END_USER_LOADING: {
      return { ...state, loading: false }
    }

    default: {
      return state
    }
  }
}
