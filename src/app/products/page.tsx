
import Partner from '@/components/partners'
import Portfolio from '@/components/portfolio'
import CustomPageBanner from '@/components/shared/custom-page-banner'
import React from 'react'

const ProductPage = () => {
  return (
    <div className='bg-white text-black'>
        <CustomPageBanner
            text="Our Products"       
        />
        <Portfolio />
        <Partner />
    </div>
  )
}

export default ProductPage