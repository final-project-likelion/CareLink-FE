import React from 'react'
import SideNavBar from '@/components/common/SideNavBar'
import MainContent from '@/components/chat/MainContent'

const ChatPage = () => {
  return (
    <div className='flex w-full h-dvh'>
      <SideNavBar />
      <MainContent />
    </div>
  )
}

export default ChatPage
