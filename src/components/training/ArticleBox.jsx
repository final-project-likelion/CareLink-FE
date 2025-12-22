import React, { useState, useEffect } from 'react'
import api from '@/apis/axios'
import SummaryBox from './SummaryBox'
import SummaryOneLineBox from './SummaryOneLineBox'
import Loading from '../common/Loading'

function ArticleBox({ newsId }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const getArticle = async () => {
    try {
      setIsLoading(true)
      const res = await api.get(`/api/trainings/news/${newsId}`)

      if (res.data.success) {
        setTitle(res.data.data.title)
        setContent(res.data.data.content)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getArticle()
  }, [newsId])
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
          <SummaryBox newsId={newsId} />
          <hr className='w-[880px] border-0 border-t border-[#606060]' />
          <SummaryOneLineBox newsId={newsId} />
        </div>
      </div>
    </div>
  )
}

export default ArticleBox
