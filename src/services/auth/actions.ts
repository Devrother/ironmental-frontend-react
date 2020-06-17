export const START_AUTH_LOADING = 'auth/START_AUTH_LOADING' as const
export const END_AUTH_LOADING = 'auth/END_AUTH_LOADING' as const
export const SEND_AUTH_CONFIRM = 'auth/SEND_AUTH_CONFIRM' as const
export const SEND_AUTH_CONFIRM_SUCCESS = 'auth/SEND_AUTH_CONFIRM_SUCCESS' as const
export const SEND_AUTH_CONFIRM_FAILURE = 'auth/SEND_AUTH_CONFIRM_FAILURE' as const

export const actions = {
  startAuthLoading: () => ({ type: START_AUTH_LOADING }),
  endAuthLoading: () => ({ type: END_AUTH_LOADING }),
  sendAuthConfirm: (code: string) => ({
    type: SEND_AUTH_CONFIRM,
    payload: { code },
  }),
  sendAuthConfirmSuccess: (message: string) => ({
    type: SEND_AUTH_CONFIRM_SUCCESS,
    payload: { message },
  }),
  sendAuthConfirmFailure: (error: Error) => ({
    type: SEND_AUTH_CONFIRM_FAILURE,
    payload: { error },
  }),
}
