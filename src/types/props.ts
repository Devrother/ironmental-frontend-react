export interface Article {
  id: string
  title: string
  tags: string[]
  text: string
  articleLink: string
  created: string
  updated: string
}

export interface ErrorInfo {
  status: string
  title: number | string
  subTitle: string
}
