import React from 'react'
import quiz from '@/assets/icons/icon-dashboard-quiz.svg'

const QuizCard = () => {
  return (
    <div className='px-6 py-6 border border-[#4F46E5] rounded-[15px]'>
      <div className='flex justify-between items-center'>
        <p className='font-semibold text-[20px] text-black'>오늘의 퀴즈 점수</p>
        <div className='px-[5px] py-2.5 rounded-[15px] bg-[#EFEFFE]'>
          <img src={quiz} alt='퀴즈' className='aspect-square w-[30px]' />
        </div>
      </div>
      <div>
        <p className='font-semibold text-[28px] text-black pt-1.5'>
          <span className='text-[40px]'>100</span>점
        </p>
        {/* 그래프 */}
        <p className='font-normal text-[15px] text-black text-end pt-5'>일주일 변화 추이</p>
      </div>
    </div>
  )
}

export default QuizCard
