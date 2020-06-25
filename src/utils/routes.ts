import { createBrowserHistory } from 'history'
import { routePath } from 'src/constants'
export const history = createBrowserHistory()

export const gotoError = (errorCode: string | number) => {
  history.push(routePath.ERROR, { errorCode })
}
export const push = <T>(targetUrl: string, props?: T) => {
  history.push(targetUrl, { ...props })
}

export const redirect = (targetUrl: string) => {
  history.replace(targetUrl)
}
