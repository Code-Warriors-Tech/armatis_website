import React from 'react'

const CustomTinyTitle = ({text, className}: any) => {
  return (
    <h3 className={`text-black text-lg font-semibold ${className}`}>{text}</h3>
  )
}

export default CustomTinyTitle