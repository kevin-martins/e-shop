'use client'
import React, { useState } from 'react'
import { ProductProps } from '@/models/product'
import { average, normalisePrice, priceToEuro } from '@/helpers/utils'

const ProductCard = (product: ProductProps) => {
  const [hover, setHover] = useState<boolean>(false)

  const handleEnter = () => {
    setHover(true)
  }

  const handleLeave = () => {
    setHover(false)
  }

  return (
    <div>
      <div
        className={`relative transition duration-600 w-60 h-80 bg-green-500 rounded-lg
        ${product.quantity ? 'hover:-translate-y-3': ''}
        `}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {product.quantity === 0 &&
          <div className='absolute grid items-center bg-black/30 rounded-lg w-full h-full'>
            <p className='text-center text-lg text-white'>No more available</p>
          </div>
        }
        <p className='text-end pt-2 pr-2 text-yellow-500 text-lg'>
          {priceToEuro(normalisePrice(product.price))}
        </p>
        <img
          alt={product.name}
          src={product.image.url}
          width={256}
          height={256}
          className='mx-auto'
        />
        <p className={`text-white text-center text-2xl ${hover ? 'text-white' : 'text-black'}`}>{product.name}</p>
        <p>{average(product.comments.map((comment) => comment.rating))}</p>
      </div>
      {hover &&
        <div>
          salut
        </div>
      }
    </div>
  )
}

export default ProductCard
