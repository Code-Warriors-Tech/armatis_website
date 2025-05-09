import React from 'react'

interface CustomSubtitleProps {
  text: string;
  className?: string;
}

const CustomSubtitle: React.FC<CustomSubtitleProps> = ({text, className}) => {
  return (
    <h1 className={`text-[32px] lg:text-[56px] text-black font-bold leading-tight mb-6 ${className}`}>
        {text}
    </h1>
  )
}

export default CustomSubtitle