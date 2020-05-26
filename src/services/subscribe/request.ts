import request from 'src/config/axios'

export const sendEmailSubscribe = async (email: string) => {
  try {
    const response = await request.post('/subscribers', {
      email,
    })

    return response
  } catch (e) {
    // console.error(e)
  }
}
