import React from 'react'

interface TitleBadgeProps {
  text: string;
  className?: string;
}

const TitleBadge: React.FC<TitleBadgeProps> = ({text, className}) => {
  return (
    <p className={`border border-[#ED1969] text-[#ED1969] text-sm font-bold rounded-lg py-2 px-6 w-fit text-center mb-4 uppercase ${className}`}>
        {text}
    </p>
  )
}

export default TitleBadge