import Partner from '@/components/partners'
import CustomPageBanner from '@/components/shared/custom-page-banner'
import TeamCard from '@/components/team/team-card'
import { teamMembers } from '@/constant/data'
import WrapperLayout from '@/layout/wrapper-layout'
import React from 'react'

const TeamPage = () => {
  return (
    <div className='bg-white text-black'>
        <CustomPageBanner
            text="Our Team"       
        />
        <div className='py-20'>
            <WrapperLayout>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {teamMembers.map((member, index) => (
                        <TeamCard
                            key={index}
                            image={member.image}
                            name={member.name}
                            position={member.position}
                            socialMedia={member.socialMedia}
                        />
                    ))}
                </div>
            </WrapperLayout>
        </div>
        <Partner />
    </div>
  )
}

export default TeamPage