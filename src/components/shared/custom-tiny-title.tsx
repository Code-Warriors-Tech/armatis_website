import React from 'react'

interface CustomTinyTitleProps {
  text: string;
  className?: string;
}


const CustomTinyTitle: React.FC<CustomTinyTitleProps> = ({text, className}) => {
  return (
    <h3 className={`text-black font-semibold ${className}`}>{text}</h3>
  )
}

export default CustomTinyTitle