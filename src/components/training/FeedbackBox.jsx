import React from 'react'
import CircleCheck from '@/assets/icons/icon-circle-check.svg'

function FeedbackBox({ title, text, boxtitle, answers, answer, feedbackType }) {
  return (
    <div className='flex flex-col gap-5 p-[30px] mt-[50px] mr-[58px] ml-12 bg-[#D4ECDB] rounded-[20px]'>
      <div className='flex flex-row gap-[11px]'>
        <img src={CircleCheck} />
        <p className='font-semibold text-[23px]'>{title}</p>
      </div>
      <p className='text-[18px] whitespace-pre-line'>{text}</p>
      <div className='py-[18px] px-[21px] bg-white rounded-[10px]'>
        <p className='font-semibold text-[20px]'>{boxtitle}</p>
        <div className='pt-2.5'>
          {feedbackType === 1 && answers && (
            <div className='flex flex-col gap-2 font-medium text-[18px]'>
              <p>누가: {answers.who}</p>
              <p>언제: {answers.whenAt}</p>
              <p>어디서: {answers.whereAt}</p>
              <p>무엇을: {answers.what}</p>
              <p>어떻게: {answers.how}</p>
              <p>왜: {answers.why}</p>
            </div>
          )}
          {feedbackType === 2 && answer && (
            <p className='font-medium text-[18px]'>{answer.summary}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default FeedbackBox
