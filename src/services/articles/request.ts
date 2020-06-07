import request from 'src/config/axios'
import { apiUtils } from 'src/utils'

export const fetchArticles = async ({
  offset,
  limit,
}: {
  offset: number
  limit: number
}) => {
  try {
    const querystring = apiUtils.objToQuerystring({ offset, limit })
    const response = await request.get(`/articles?${querystring}`)

    return response
  } catch (e) {
    // console.error(e)
  }
}

// export const fetchArticles = async () => {
//   try {
//     const response = await request.get('/articles')

//     return response
//   } catch (e) {
//     // console.error(e)
//   }
// }
