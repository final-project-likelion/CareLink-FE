import React from 'react'
import Title from '../common/Title'
import Subtitle from '../common/Subtitle'
import MonthSection from './MonthSection'

const MainResult = () => {
  return (
    <div className='flex-1 bg-background py-[30px] px-[50px] overflow-x-hidden'>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-2.5'>
          <Title text={'지난 훈련 결과'} />
          <Subtitle text={'AI 신문 요약 훈련 기록입니다. 월별로 기록을 탐색하세요.'} />
        </div>
        {/* 월 선택 */}
        <MonthSection />
        {/* 훈련 요약 */}
        {/* 결과 카드 */}
      </div>
    </div>
  )
}

export default MainResult
