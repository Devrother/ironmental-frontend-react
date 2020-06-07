interface QueryObject {
  [key: string]: number | string
}

export const objToQuerystring = (query: QueryObject) =>
  Object.keys(query)
    .map((key: string) => `${key}=${query[key]}`)
    .join('&')

export const querystringToObj = (url: string) => {
  const querystring = url.split('?')[1]

  const queryObject = querystring
    .split('&')
    .reduce((obj: QueryObject, query: string) => {
      const property = query.split('=')
      obj[property[0]] = property[1]

      return obj
    }, {})

  return queryObject
}
