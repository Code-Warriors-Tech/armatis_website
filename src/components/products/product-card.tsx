/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import CustomLinkButton from '../shared/custom-link-button'

const ProductCard = ({product}: any) => {
  return (
    <div className='shadow overflow-hidden rounded-lg'>
        <img src={product.image} className="w-full h-[300px] object-cover" />
        <div className="p-5">
            <h3 className="text-2xl font-semibold text-gray-800">{product.title}</h3>
            <p className="text-[#ED1969] mb-4 h-[50px] overflow-hidden">{product.desc}</p>
            <div className="flex items-center justify-between">
                <p>
                    Created On:
                    <small className='text-gray-500'>{product.datecrated}</small>
                </p>
                <CustomLinkButton text="Explore Project" href="" />
            </div>
        </div>
    </div>
  )
}

export default ProductCard