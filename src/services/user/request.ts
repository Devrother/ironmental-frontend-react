import request from 'src/config/axios'

export const checkLoggedIn = () => request.get('/users/token/test')

export const sendJoin = (code: string) => request.post('/users/join', { code })

export const sendLogin = (code: string) =>
  request.post('/users/login', { code })
