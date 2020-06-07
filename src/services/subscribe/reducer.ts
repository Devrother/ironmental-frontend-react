import { StateTypes, ActionTypes } from 'src/types'
import {
  START_SUBSCRIBE_LOADING,
  END_SUBSCRIBE_LOADING,
  SEND_EMAIL_SUBSCRIBE_FAILURE,
  SEND_EMAIL_SUBSCRIBE_SUCCESS,
} from './actions'

const initialState: StateTypes.SubscribeState = {
  error: null,
  loading: false,
  result: {
    message: '',
    status: '',
  },
}
export const subscribeReducer = (
  state: StateTypes.SubscribeState = initialState,
  action: ActionTypes.Subscribe
) => {
  switch (action.type) {
    case SEND_EMAIL_SUBSCRIBE_SUCCESS: {
      const { isSubscribeCertified, message } = action.payload
      const status = isSubscribeCertified ? '미구독' : '구독중'

      return { ...state, result: { message, status } }
    }

    case SEND_EMAIL_SUBSCRIBE_FAILURE: {
      const { error } = action.payload

      return { ...state, error }
    }

    case START_SUBSCRIBE_LOADING: {
      return { ...state, loading: true }
    }

    case END_SUBSCRIBE_LOADING: {
      return { ...state, loading: false }
    }

    default: {
      return state
    }
  }
}
