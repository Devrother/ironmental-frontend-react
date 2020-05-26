import request from 'src/config/axios'

export const fetchArticleById = async (id: string) => {
  try {
    const response = await request.get(`/articles/${id}`)

    return response
  } catch (e) {
    // console.error(e)
  }
}
