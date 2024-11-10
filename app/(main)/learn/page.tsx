
import { FeedWrapper } from '@/components/feed-wrapper'
import { StickyWrapper } from '@/components/sticky-wrapper'
import React from 'react'
import Header from './header'
import UserProgress from '@/components/user-progress'
import { getUserProgress } from '@/db/queries'
import { redirect } from 'next/navigation'

const page = async() => {
  const userProgressData=getUserProgress();


  const [userProgress]=await Promise.all([
    userProgressData
  ])

  if(!userProgress || !userProgress.activeCourse){
    redirect("/courses");
  }



  return (
    <div className='flex flex-row-reverse gap-[49px] px-6'>
      <StickyWrapper>
     <UserProgress activeCourse={userProgress?.activeCourse} hearts={userProgress?.hearts} points={userProgress?.points} hasActiveSubscription={false} />
  
      </StickyWrapper>

      <FeedWrapper>
       <Header title={userProgress.activeCourse.title} />
       <div className='space-y-4'>
        

       </div>

      </FeedWrapper>

    </div>
  )
}

export default page