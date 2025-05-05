import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-around py-7'>
      <div>logo</div>
      <ul className='flex items-center gap-3'>
        <li><Link href="">Home</Link></li>
        <li><Link href="">About</Link></li>
        <li><Link href="">Our Services</Link></li>
        <li><Link href="">Our Team</Link></li>
      </ul>
      <Link href="" className='bg-green-600 hover:bg-green-700 rounded-full px-10 py-3 transition font-bold'>Contact Us</Link>
    </div>
  )
}

export default Header