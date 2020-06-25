import { PropsTypes } from 'src/types'

export const START_USER_LOADING = 'user/START_USER_LOADING' as const
export const END_USER_LOADING = 'user/END_USER_LOADING' as const
export const SET_USER = 'user/SET_USER' as const
export const LOGOUT = 'user/LOGOUT' as const
export const SEND_LOGIN = 'user/SEND_LOGIN' as const
export const SEND_LOGIN_SUCCESS = 'user/SEND_LOGIN_SUCCESS' as const
export const SEND_LOGIN_FAILURE = 'user/SEND_LOGIN_FAILURE' as const
export const SEND_JOIN = 'user/SEND_JOIN' as const
export const SEND_JOIN_SUCCESS = 'user/SEND_JOIN_SUCCESS' as const
export const SEND_JOIN_FAILURE = 'user/SEND_JOIN_FAILURE' as const
export const CHECK_LOGGED_IN = 'user/CHECK_LOGGED_IN' as const
export const CHECK_LOGGED_IN_SUCCESS = 'user/CHECK_LOGGED_IN_SUCCESS' as const
export const CHECK_LOGGED_IN_FAILURE = 'user/CHECK_LOGGED_IN_FAILURE' as const

export const actions = {
  startSetUserLoading: () => ({ type: START_USER_LOADING }),
  endSetUserLoading: () => ({ type: END_USER_LOADING }),
  setUser: (user: PropsTypes.User) => ({ type: SET_USER, payload: { user } }),
  logout: () => ({ type: LOGOUT }),
  sendLogin: (code: string) => ({
    type: SEND_LOGIN,
    payload: { code },
  }),
  sendLoginSuccess: (user: PropsTypes.User) => ({
    type: SEND_LOGIN_SUCCESS,
    payload: { user },
  }),
  sendLoginFailure: (error: Error) => ({
    type: SEND_LOGIN_FAILURE,
    payload: { error },
  }),
  sendJoin: (code: string) => ({
    type: SEND_JOIN,
    payload: { code },
  }),
  sendJoinSuccess: (user: PropsTypes.User) => ({
    type: SEND_JOIN_SUCCESS,
    payload: { user },
  }),
  sendJoinFailure: (error: Error) => ({
    type: SEND_JOIN_FAILURE,
    payload: { error },
  }),
  checkLoggedIn: () => ({ type: CHECK_LOGGED_IN }),
  checkLoggedInSuccess: (user: PropsTypes.User) => ({
    type: CHECK_LOGGED_IN_SUCCESS,
    payload: { user },
  }),
  checkLoggedInFailure: (error: Error) => ({
    type: CHECK_LOGGED_IN_FAILURE,
    payload: { error },
  }),
}
