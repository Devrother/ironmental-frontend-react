import { objToQuerystring, querystringToObj } from './api'

describe('api uitl test', () => {
  test('Object to Querystring ', () => {
    expect(objToQuerystring({ offset: 4, limit: 7 })).toBe('offset=4&limit=7')
  })

  test('querystring to Object ', () => {
    expect(
      querystringToObj(
        'https://api.ironmental.net/v1/interviews?tag=all&search=&offset=8&limit=4'
      )
    ).toStrictEqual({
      tag: 'all',
      search: '',
      offset: '8',
      limit: '4',
    })
  })
})
