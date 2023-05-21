import { getProductDetail } from '@/services/product'
import { useRouter } from 'next/router'
import React from 'react'

const ProductDetail = () => {
  // const router = useRouter()
  // console.log(router)
  const id = ""
  const product = getProductDetail(id)
  return (
    <div>
      here
    </div>
  )
}

export default ProductDetail
