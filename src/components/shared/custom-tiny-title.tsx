import React from 'react'

const CustomTinyTitle = ({text, className}: any) => {
  return (
    <h3 className={`text-black font-semibold ${className}`}>{text}</h3>
  )
}

export default CustomTinyTitle