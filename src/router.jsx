import { createBrowserRouter } from 'react-router-dom'
import App from './App'
// 챗봇
import ChatPage from '@/pages/chat/ChatPage'
// 인지훈련
import TrainingPage from './pages/training/TrainingPage'
import TrainingArticlePage from './pages/training/TrainingArticlePage'
import TrainingResultPage from './pages/training/TrainingResultPage'
// 환경설정
import SettingsPage from './pages/settings/SettingsPage'

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
    children: [
      { index: true, element: <TrainingPage /> },
      {
        path: 'article',
        element: <TrainingArticlePage />,
      },
      {
        path: 'result',
        element: <TrainingResultPage />,
      },
    ],
  },
  {
    path: '/settings',
    element: <App />,
    children: [{ index: true, element: <SettingsPage /> }],
  },
])

export default router
