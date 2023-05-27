'use client'
import React, { useState } from 'react'
import { ProductProps } from '@/models/product'
import { average, normalisePrice, priceToEuro } from '@/helpers/utils'
import Image from 'next/image'

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
          {priceToEuro(normalisePrice(product.price))}€
        </p>
        <Image
          alt={product.name}
          src={product.image.url}
          width={200}
          height={200}
          className='mx-auto'
        />
        <div className='grid w-full'>
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/3d-fluency/94/star.png"
            alt="star"
          />
          <p className='mx-auto'>
            {Math.round(average(product.comments.map((comment) => comment.rating)))}
          </p>
        <p className={`text-white mx-auto text-2xl ${hover ? 'text-white' : 'text-black'}`}>{product.name}</p>
        </div>
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
