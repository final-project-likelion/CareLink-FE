import React, { useState, useMemo, useEffect } from 'react'
import DiaryTipCard from './DiaryTipCard'
import CareMessageCard from './CareMessageCard'
import CalederCard from './CalederCard'
import CalendarContent from './CalendarContent'

const DiaryListContent = () => {
  return (
    <div className='px-[50px] py-[30px] w-full overflow-y-auto flex flex-col gap-5'>
      <div>
        <h1 className='font-semibold text-[40px] text-black pb-2.5'>나의 일기 기록</h1>
        <p className='font-normal text-[18px] text-[#606060]'>
          작성한 일기를 달력에서 확인해보세요.
        </p>
      </div>
      <div className='flex gap-[50px]'>
        <CalendarContent />
        <div className='flex flex-col gap-[25px]'>
          <DiaryTipCard />
          <CareMessageCard />
          <CalederCard />
        </div>
      </div>
    </div>
  )
}

export default DiaryListContent
