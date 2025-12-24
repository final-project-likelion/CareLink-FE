import React, { useState, useEffect } from 'react'
import api from '@/apis/axios'
import SummaryBox from './SummaryBox'
import SummaryOneLineBox from './SummaryOneLineBox'
import Loading from '../common/Loading'

function ArticleBox({ newsId, mode }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userSixW, setUserSixW] = useState(null)
  const [systemSixW, setSystemSixW] = useState(null)
  const [userSummary, setUserSummary] = useState(null)
  const [systemSummary, setSystemSummary] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const getArticle = async () => {
    try {
      setIsLoading(true)

      if (mode === 'today') {
        const res = await api.get(`/api/trainings/news/${newsId}`)
        setTitle(res.data.data.title)
        setContent(res.data.data.content)
      } else {
        const res = await api.get(`/api/trainings/${newsId}`)
        setTitle(res.data.data.newsTitle)
        setContent(res.data.data.newsContent)
        setUserSixW(res.data.data.userSixW)
        setSystemSixW(res.data.data.systemSixW)
        setUserSummary(res.data.data.userSummary)
        setSystemSummary(res.data.data.systemSummary)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getArticle()
  }, [newsId, mode])
  return (
    <div className='relative'>
      {isLoading && (
        <div className='absolute inset-0 z-10 flex items-center justify-center'>
          <Loading />
        </div>
      )}
      <div className='p-[30px] bg-white rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] '>
        <div className='flex flex-col gap-[50px]'>
          <div className='flex flex-col gap-2.5'>
            <p className='font-semibold text-[30px] whitespace-pre-line'>{title}</p>
            <p className='text-[20px] whitespace-pre-line leading-relaxed'>{content}</p>
          </div>
          {mode === 'today' ? (
            <>
              <SummaryBox newsId={newsId} />
              <hr className='w-[880px] border-0 border-t border-[#606060]' />
              <SummaryOneLineBox newsId={newsId} />
            </>
          ) : (
            <>
              <SummaryBox mode='history' defaultFieldData={userSixW} defaultAnswers={systemSixW} />
              <hr className='w-[880px] border-0 border-t border-[#606060]' />
              <SummaryOneLineBox
                mode='history'
                defaultFieldData={userSummary}
                defaultAnswer={systemSummary}
              />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ArticleBox
