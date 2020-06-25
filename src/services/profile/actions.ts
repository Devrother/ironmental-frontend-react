export const GET_PROFILE = 'profile/GET_PROFILE' as const
export const GET_PROFILE_SUCCESS = 'profile/GET_PROFILE_SUCCESS' as const
export const GET_PROFILE_FAILURE = 'profile/GET_PROFILE_FAILURE' as const

export const actions = {
  getProfile: () => ({ type: GET_PROFILE }),
  getProfileSuccess: () => ({ type: GET_PROFILE_SUCCESS }),
  getProfileFailure: () => ({ type: GET_PROFILE_FAILURE }),
}
