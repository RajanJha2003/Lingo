
import { FeedWrapper } from '@/components/feed-wrapper'
import { StickyWrapper } from '@/components/sticky-wrapper'
import React from 'react'
import Header from './header'

const page = () => {
  return (
    <div className='flex flex-row-reverse gap-[49px] px-6'>
      <StickyWrapper>
        sticky

      </StickyWrapper>

      <FeedWrapper>
       <Header title="Hindi" />

      </FeedWrapper>

    </div>
  )
}

export default page