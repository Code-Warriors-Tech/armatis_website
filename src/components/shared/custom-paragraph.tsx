/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

const CustomParagraph = ({text, className}: any) => {
  return (
    <p className={`text-gray-700 text-sm sm:text-base ${className}`}>
        {text}
    </p>
  )
}

export default CustomParagraph