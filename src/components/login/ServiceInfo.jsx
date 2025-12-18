import React from 'react'
import loginImg from '@/assets/images/login-img.svg'
import chat from '@/assets/icons/icon-nav-chat.svg'
import training from '@/assets/icons/icon-nav-training.svg'
import dashboard from '@/assets/icons/icon-nav-dashboard.svg'

const ServiceInfo = () => {
  return (
    <div className='w-[530px] flex flex-col items-center z-10 ml-32'>
      <div>
        <img src={loginImg} alt='케어링크' />
      </div>
      <div className='flex flex-col self-start pl-5'>
        <div className='py-8'>
          <h1 className='font-semibold text-5xl leading-14'>
            <span className='text-primary'>건강한</span> 기억을 <br /> 함께 지켜드립니다.
          </h1>
        </div>
        <div className='pb-9'>
          <p className='font-light text-2xl text-[#323232]'>
            CareLink는 치매 경도 환자와 보호자를 위한 <br /> 맞춤형 통합 돌봄 플랫폼입니다. <br />{' '}
            지금 바로 시작해보세요.
          </p>
        </div>
      </div>
      <div className='flex grid-cols-3 gap-10 justify-center'>
        <div className='flex shadow-[0_1px_1px_0_rgba(0,0,0,0.25)] inset-shadow-[0_1px_1px_0_rgba(0,0,0,0.25)] p-5 rounded-2xl items-center bg-white'>
          <img src={chat} alt='chat' className='pr-1' />
          <span className='font-semibold text-[15px] '>AI 챗봇 케어</span>
        </div>
        <div className='flex shadow-[0_1px_1px_0_rgba(0,0,0,0.25)] inset-shadow-[0_1px_1px_0_rgba(0,0,0,0.25)] p-5 rounded-2xl items-center bg-white'>
          <img src={training} alt='chat' className='pr-1' />
          <span className='font-semibold text-[15px] '>AI 인지 훈련</span>
        </div>
        <div className='flex shadow-[0_1px_1px_0_rgba(0,0,0,0.25)] inset-shadow-[0_1px_1px_0_rgba(0,0,0,0.25)] p-5 rounded-2xl items-center bg-white'>
          <img src={dashboard} alt='chat' className='pr-1' />
          <span className='font-semibold text-[15px] '>대시보드</span>
        </div>
      </div>
    </div>
  )
}

export default ServiceInfo
