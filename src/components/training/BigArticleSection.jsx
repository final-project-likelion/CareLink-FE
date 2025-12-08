import React from 'react'
import BigArticleCard from './BigArticleCard'
import Thumb from '@/assets/images/temp-article-thumb.svg'

// 더미데이터
const dummyData = [
  {
    id: 1,
    img: Thumb,
    title: '뉴스 더미 데이터 1',
    time: 3,
  },
  {
    id: 2,
    img: Thumb,
    title: '뉴스 더미 데이터 2',
    time: 3,
  },
  {
    id: 3,
    img: Thumb,
    title: '뉴스 더미 데이터 3',
    time: 3,
  },
]

const BigArticleSection = () => {
  return (
    <div className='w-full overflow-x-auto'>
      <div className='flex flex-row gap-[30px] flex-nowrap w-max'>
        {dummyData.map((d) => (
          <BigArticleCard key={d.id} img={d.img} title={d.title} time={d.time} />
        ))}
      </div>
    </div>
  )
}

export default BigArticleSection
