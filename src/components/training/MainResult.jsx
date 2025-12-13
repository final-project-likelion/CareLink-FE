import React, { useState } from 'react'
import Title from '../common/Title'
import Subtitle from '../common/Subtitle'
import MonthSection from './MonthSection'
import MonthSummarySection from './MonthSummarySection'

const MainResult = () => {
  // 이번달 받아오기
  const [month, setMonth] = useState(new Date().getMonth() + 1)

  // 월별 훈련요약 연동

  // 일별 훈련요약 카드 연동

  return (
    <div className='flex-1 bg-background py-[30px] px-[50px] overflow-x-hidden'>
      <div className='flex flex-col '>
        <div className='flex flex-col gap-2.5'>
          <Title text={'지난 훈련 결과'} />
          <Subtitle text={'AI 신문 요약 훈련 기록입니다. 월별로 기록을 탐색하세요.'} />
        </div>
        {/* 월 선택 */}
        <MonthSection month={month} setMonth={setMonth} />
        {/* 훈련 요약 */}
        <MonthSummarySection month={month} count={5} avgScore={90} bestScore={95} />
        {/* 결과 카드 */}
      </div>
    </div>
  )
}

export default MainResult
