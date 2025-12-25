import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ToastModal from '../signup/ToastModal'

function BigArticleCard({ newsId, img, title, time, disabled }) {
  const [toast, setToast] = useState({
    open: false,
    message: '',
  })
  const navigate = useNavigate()

  const handleClick = () => {
    if (disabled) {
      showToast('오늘의 문제는 이미 완료하셨어요. 내일 다시 참여해 주세요.')
      return
    }
    navigate(`/training/article/${newsId}`)
  }

  const showToast = (msg) => {
    setToast({
      open: true,
      message: msg,
    })
  }

  const closeToast = () => {
    setToast({
      open: false,
      message: '',
    })
  }
  return (
    <>
      <div
        onClick={handleClick}
        className='w-80 h-80 flex flex-col gap-2.5 p-5 rounded-[20px] bg-[#E8E8E8] cursor-pointer'
      >
        <img className='w-[280px] h-[170px] rounded-2xl object-cover pb-2.5' src={img} />
        <p className='font-semibold text-[20px] line-clamp-1'>{title}</p>
        <p className='font-normal text-[18px]'>예상 소요 시간: {time}분</p>
      </div>
      <ToastModal open={toast.open} message={toast.message} duration={1500} onClose={closeToast} />
    </>
  )
}

export default BigArticleCard
