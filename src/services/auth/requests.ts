import request from 'src/config/axios'

export const sendAuth = (code: string) =>
  request.post('/auth/confirm', { code })

// export const sendAuth = (subscriberId: string) =>
//   request.patch('/auth/confirm', { subscriberId })
