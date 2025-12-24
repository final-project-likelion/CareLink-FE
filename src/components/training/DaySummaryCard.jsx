import React from 'react'
import { useNavigate } from 'react-router-dom'
import Score from '@/assets/icons/icon-score.svg'

function DaySummaryCard({ newsId, date, title, score }) {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/training/article/result/${newsId}`)
  }
  return (
    <div
      onClick={handleClick}
      className='flex flex-col gap-5 py-[25px] px-6 rounded-[15px] bg-white shadow-[0px_1px_1px_0px_rgba(0,0,0,0.25)] cursor-pointer'
    >
      <p className='font-medium text-[20px]'>{date}</p>
      <p className='font-semibold text-[25px] line-clamp-2 break-keep'>{title}</p>
      <div className='flex flex-col gap-2.5'>
        <hr className='border-0 border-t border-[#BFBFBF]' />
        <div className='flex flex-row gap-2.5 items-center'>
          <img src={Score} />
          <p className='font-medium text-[20px]'>{score}점</p>
        </div>
      </div>
    </div>
  )
}

export default DaySummaryCard
