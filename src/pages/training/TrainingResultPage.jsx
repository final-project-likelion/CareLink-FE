import React from 'react'
import SideNavBar from '@/components/common/SideNavBar'
import MainResult from '@/components/training/MainResult'

const TrainingResultPage = () => {
  return (
    <div className='flex w-full h-dvh'>
      <SideNavBar />
      <MainResult />
    </div>
  )
}

export default TrainingResultPage
