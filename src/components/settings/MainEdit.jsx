import React from 'react'
import Title from '../common/Title'
import Subtitle from '../common/Subtitle'

function MainEdit(props) {
  return (
    <div className='flex-1 bg-background py-[30px] px-[50px] overflow-x-hidden'>
      <div className='flex flex-col '>
        <div className='flex flex-col gap-2.5'>
          <Title text={'약 복용 정보 수정'} />
          <Subtitle text={'복용 중인 약의 종류나 복용 시간을 변경할 수 있습니다.'} />
        </div>
      </div>
    </div>
  )
}

export default MainEdit
