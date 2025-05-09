import About from '@/components/about-us'
import CustomPageBanner from '@/components/shared/custom-page-banner'
import React from 'react'

const AboutPage: React.FC = () => {
    return (
        <div className='bg-white text-black'>
            <CustomPageBanner
                text="About Us"       
            />
            <About/>
        </div>
    )
}

export default AboutPage;