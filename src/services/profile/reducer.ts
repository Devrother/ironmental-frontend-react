import { StateTypes, ActionTypes } from 'src/types/'

export const initialState = {
  error: null,
  loading: false,
  profile: {
    userId: '',
    email: '',
    username: '',
    likesCount: 0,
    commentCount: 0,
    likes: [],
    comments: [],
  },
}

export const profileReducer = (
  state: StateTypes.ProfileState = initialState,
  action: ActionTypes.Profile
) => {
  switch (action.type) {
    default: {
      return state
    }
  }
}
