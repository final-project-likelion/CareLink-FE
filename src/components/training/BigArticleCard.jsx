import React from 'react'

function BigArticleCard({ img, title, time }) {
  return (
    <div className='w-80 h-80 flex flex-col gap-2.5 p-5 rounded-[20px] bg-[#D9D9D9] cursor-pointer'>
      <img className='pb-2.5' src={img} />
      <p className='font-semibold text-[20px] line-clamp-1'>{title}</p>
      <p className='font-normal text-[18px]'>예상 소요 시간: {time}분</p>
    </div>
  )
}

export default BigArticleCard
