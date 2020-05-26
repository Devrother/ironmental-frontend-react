import mockAxios from 'axios'
import { fetchArticleById } from './request'

jest.mock('./request')

it('should be fetch articleById', async () => {
  const targetArticle = {
    tags: ['nodejs'],
    id: '5cf142b857cd51f683cd928e',
    title: 'node.js',
    text: 'node.js text or none',
    created: '2019-05-31T15:05:28.527Z',
    updated: '2019-05-31T15:05:28.527Z',
    articleLink: 'https://google.com',
    links: {
      self: 'https://api.ironmental.net/v1/articles/5cf142b857cd51f683cd928e',
    },
  }

  fetchArticleById.mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        tags: ['nodejs'],
        id: '5cf142b857cd51f683cd928e',
        title: 'node.js',
        text: 'node.js text or none',
        created: '2019-05-31T15:05:28.527Z',
        updated: '2019-05-31T15:05:28.527Z',
        articleLink: 'https://google.com',
        links: {
          self:
            'https://api.ironmental.net/v1/articles/5cf142b857cd51f683cd928e',
        },
      },
    })
  )

  const res = await fetchArticleById('emwkl3bmk3dl3mvkla2')

  expect(res.data).toEqual(targetArticle)
})
