import React from 'react'

const TitleBadge = ({text, className}: any) => {
  return (
    <p className={`border border-[#ED1969] text-[#ED1969] text-sm font-bold rounded-lg py-2 px-6 w-fit text-center mb-4 ${className}`}>
        {text}
    </p>
  )
}

export default TitleBadge