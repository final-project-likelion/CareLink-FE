import React from 'react'
import SideNavBar from '@/components/common/SideNavBar'
import DashboardContent from '@/components/dashboard/DashboardContent'

const DashboardPage = () => {
  return (
    <div className='flex w-full h-dvh'>
      <SideNavBar />
      <DashboardContent />
    </div>
  )
}

export default DashboardPage
