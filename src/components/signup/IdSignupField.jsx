import React from 'react'

const IdSignupField = ({ value, onChange, onCheck, status, message }) => {
  const isOk = status === 'ok'
  const isFail = status === 'fail'
  const isLoading = status === 'loading'

  return (
    <div>
      <div>
        <span className='text-[18px] font-semibold'>아이디 (휴대폰 번호)</span>
      </div>
      <div className='relative'>
        <input
          className='border-solid border-[1.5px] border-[#b3b3b3] rounded-[10px] w-full py-[19px] pl-[25px] font-medium text-[18px] pr-[114px]'
          type='text'
          placeholder='010-0000-0000'
          value={value}
          onChange={onChange}
        />
        <button
          onClick={onCheck}
          className={`font-medium text-[15px] ${isOk ? 'text-white' : 'text-black'} rounded-[10px] ${isOk ? 'bg-primary' : 'bg-[#D9D9D9]'}  px-[15px] py-1.5 absolute top-[15px] right-4 cursor-pointer`}
        >
          {isLoading ? '확인중...' : '중복확인'}
        </button>
      </div>
      {status !== 'idle' && message && (
        <p className={`mt-0.5 font-normal text-[15px] ${isOk ? 'text-primary' : 'text-[#980000]'}`}>
          {message}
        </p>
      )}
    </div>
  )
}

export default IdSignupField
