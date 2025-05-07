import React from 'react'

const CustomSubtitle = ({text, className}: any) => {
  return (
    <h1 className={`text-[32px] lg:text-[56px] text-black font-bold leading-tight mb-6 ${className}`}>
        {text}
    </h1>
  )
}

export default CustomSubtitle