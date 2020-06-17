import { StateTypes, ActionTypes } from 'src/types'
import {
  SET_USER,
  SET_USER_FAILURE,
  START_SET_USER_LOADING,
  END_SET_USER_LOADING,
  SET_PREV_URL,
} from './actions'

const initialState: StateTypes.UserState = {
  loading: false,
  user: {
    userId: '',
    email: '',
    username: '',
    /* isSubscribe: false,
    likes: [],
    favoriteTags: [], */
  },
  prevUrl: '',
  error: null,
}

export const userReducer = (
  state: StateTypes.UserState = initialState,
  action: ActionTypes.User
) => {
  switch (action.type) {
    case SET_USER: {
      const { user } = action.payload

      return { ...state, user, error: null }
    }

    case SET_USER_FAILURE: {
      const { error } = action.payload

      return { ...state, user: null, error }
    }

    case START_SET_USER_LOADING: {
      return { ...state, loading: true }
    }

    case END_SET_USER_LOADING: {
      return { ...state, loading: false }
    }

    case SET_PREV_URL: {
      const { prevUrl } = action.payload

      return { ...state, prevUrl }
    }

    default: {
      return state
    }
  }
}
