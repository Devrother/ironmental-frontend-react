import { StateTypes } from 'src/types'

export const getSubscribeResult = (
  state: StateTypes.RootState
): StateTypes.SubscribeState => state.subscribe
