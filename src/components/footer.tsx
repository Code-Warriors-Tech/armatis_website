import WrapperLayout from '@/layout/wrapper-layout'
import React from 'react'

const IconCard = ({icon}: any) => {
  return (
    <span className='bg-white w-[40px] h-[40px] rounded-full'>
      {icon}
    </span>
  )
}

const ContectCard = ({title, data}: any) => {
  return (
    <div className='flex items-center gap-3'>
      <span>{title}:</span>
      <p>{data}</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div className='bg-[#14212B]'>
      <WrapperLayout className="mx-auto">
        <div>
          <div>
            <h1>About Prolio</h1>
            <p>We strive to business solutions ideal for small & large projects with customized project requirements.</p>
            <div>
              <IconCard icon="icon1" />
              <IconCard icon="icon2" />
              <IconCard icon="icon3" />
              <IconCard icon="icon4" />
            </div>
          </div>


          <div>
            <h1>Contact Us</h1>
            <div>
             <ContectCard title="Address" data="66 Guild Street 512B, Great North Town." />
             <ContectCard title="Mail" data="addyour@email" />
             <ContectCard title="Phone" data="(+44) 123 456 789" />
             <ContectCard title="Fax Id" data="(+1) 523-567-987" />
            </div>
          </div>


          <div>
            <h1>Our Newsletter</h1>
          </div>
        </div>
      </WrapperLayout>
    </div>
  )
}

export default Footer