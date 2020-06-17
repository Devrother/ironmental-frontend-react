import { StateTypes } from 'src/types'

export const getPrevUrl = (state: StateTypes.RootState) => state.user.prevUrl

export const getLoggedInUser = (state: StateTypes.RootState) => state.user.user
