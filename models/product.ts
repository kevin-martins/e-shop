import { CommentProps } from "./comment"

export type ProductResponseProps = {
  products: ProductProps[]
}

export type ProductProps = {
  id: string
  name: string
  price: number
  quantity: number
  image: { url: string }
  comments: { rating: number }[]
}

export type ProductDetailProps = {
  id: string
  createdAt: Date
  publishedAt: Date
  updatedAt: Date
  name: string
  image: { url: string }
  price: number
  quantity: number
  description: string
  comments: CommentProps[]
}