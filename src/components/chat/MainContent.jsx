import React, { useState } from 'react'
import TodoList from './TodoList'
import MainChat from './MainChat'

const MainContent = () => {
  return (
    <div className='flex-1 bg-[#F6F8F6] p-[30px] overflow-y-auto'>
      <TodoList />
      <MainChat />
    </div>
  )
}

export default MainContent
