import React from 'react'

function SubmitButton({ label, onClick }) {
  return (
    <button
      type='button'
      onClick={onClick}
      className='w-[400px] bg-primary py-[15px] rounded-[20px] text-white text-[20px] font-semibold cursor-pointer'
    >
      {label}
    </button>
  )
}

export default SubmitButton
