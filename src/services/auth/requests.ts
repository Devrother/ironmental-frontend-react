import request from 'src/config/axios'

export const sendAuth = (subscriberId: string) =>
  request.patch('/auth/confirm', { subscriberId })
