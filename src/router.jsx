import { createBrowserRouter } from 'react-router-dom'
import App from './App'
// 챗봇
import ChatPage from '@/pages/chat/ChatPage'
//인지훈련
import CognitiveTrainingPage from './pages/training/CognitiveTrainingPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{ index: true, element: <ChatPage /> }], // 임시 메인 페이지 챗봇으로
  },
  {
    path: '/chat',
    element: <App />,
    children: [{ index: true, element: <ChatPage /> }],
  },
  {
    path: '/training',
    element: <App />,
    children: [{ index: true, element: <CognitiveTrainingPage /> }],
  },
])

export default router
