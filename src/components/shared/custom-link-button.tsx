import React from 'react'
import Link from 'next/link';

const CustomLinkButton = ({text}: any) => {
  return (
    <Link href="" className="bg-[#ED1969] hover:bg-[#c6155a] transition-colors duration-300 text-white px-6 py-3 rounded-full font-medium">
        {text}
    </Link>
  )
}

export default CustomLinkButton