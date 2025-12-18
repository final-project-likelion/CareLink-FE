import React from 'react'
import ConditionCard from './ConditionCard'
import StatusCard from './StatusCard'

const DashboardContent = () => {
  return (
    <div className='px-[50px] py-[30px] w-full'>
      <div>
        <h1 className='font-semibold text-[40px] text-black'>종합 대시보드</h1>
      </div>
      <div>
        <div className='grid grid-cols-4 gap-7'>
          <ConditionCard />
          <StatusCard theme={'medicine'} />
          <StatusCard theme={'diary'} />
          <StatusCard theme={'training'} />
        </div>
        <div>{/* 중간영역 */}</div>
        <div>{/* 하단 영역 */}</div>
      </div>
    </div>
  )
}

export default DashboardContent
