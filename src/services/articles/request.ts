import request from 'src/config/axios'

export const fetchArticles = async () => {
  try {
    const response = await request.get('/articles')

    return response
  } catch (e) {
    // console.error(e)
  }
}
