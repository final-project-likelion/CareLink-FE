import React from 'react'
import BigArticleCard from './BigArticleCard'
import Thumb from '@/assets/images/temp-article-thumb.svg'

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
