import request from 'src/config/axios'

export const fetchArticleById = (id: string) => request.get(`/articles/${id}`)
