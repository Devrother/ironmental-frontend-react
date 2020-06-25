import { StateTypes } from 'src/types'

export const getLoggedInUser = (state: StateTypes.RootState) => state.user.user
