import React from 'react'
import calender from '@/assets/icons/icon-dashboard-calender.svg'

const CalenderCard = () => {
  return (
    <div className='px-6 py-6 border border-[#16A34A] rounded-[15px]'>
      <div className='flex justify-between items-center'>
        <p className='font-semibold text-[20px] text-black'>다음 대학병원 가는 날</p>
        <div className='px-[5px] py-2.5 rounded-[15px] bg-[#E8F9EF]'>
          <img src={calender} alt='퀴즈' className='aspect-square w-[30px]' />
        </div>
      </div>
      <div className='flex flex-col items-center gap-2 pt-4 pb-6'>
        <p className='font-black text-[50px] text-black'>D-14</p>
        <p className='font-semibold text-[20px] text-black '>2025년 11월 16일</p>
        <p className='font-normal text-[18px] text-black '>서울대학교병원 신경과</p>
      </div>
    </div>
  )
}

export default CalenderCard
