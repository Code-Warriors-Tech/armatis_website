import React, { ReactNode } from 'react'

const WrapperLayout = ({children, className}: {children: ReactNode, className?: any}) => {
  return (
    <div className={`w-[1200px] ${className}`}>
        {children}
    </div>
  )
}

export default WrapperLayout