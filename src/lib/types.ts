export type Categories = 'business' | 'banking'

export type Post = {
  title: string
  slug: string
  description: string
  date: string
  image: string
  categories: Categories[]
  published: boolean
}
