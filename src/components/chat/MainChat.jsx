import React, { useState } from 'react'
import Chatbot from './Chatbot'
import ChatInputBar from './ChatInputBar'

function MainChat() {
  // 임시 메세지
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'bot',
      text: "안녕하세요, 숙멋사님! 오늘 하루를 시작해볼까요?\n상단의 '오늘의 할 일'을 먼저 확인해주세요.",
    },
    {
      id: 2,
      role: 'user',
      text: '당연하죠. 아침에 약 먹고 퀴즈도 풀었어요.',
    },
    {
      id: 3,
      role: 'bot',
      text: '정말 잘하셨어요!\n어제 있었던 재미있는 일이나 오늘 계획에 대해 이야기해볼 수 있어요. 편하게 말씀해주세요!',
    },
    {
      id: 4,
      role: 'user',
      text: '오늘은 아침에 병원을 들렀다가, 가족들과 함께 맛있는 저녁을 먹으러 갈 예정입니다.',
    },
  ])

  const handleSendMessage = (text) => {
    if (!text.trim()) return
    const newMessage = {
      id: Date.now(),
      role: 'user',
      text,
    }
    setMessages((prev) => [...prev, newMessage])
  }
  return (
    <div>
      {/* 채팅 기록 */}
      <Chatbot messages={messages} />
      {/* 채팅 입력창 */}
      <ChatInputBar onSend={handleSendMessage} />
    </div>
  )
}

export default MainChat
