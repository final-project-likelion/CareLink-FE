import React from 'react'
import SmallArticleCard from './SmallArticleCard'
import Thumb from '@/assets/images/temp-content-thumb.svg'

const SmallArticleSection = () => {
  return (
    <div className='w-full overflow-x-auto'>
      <div className='flex flex-row gap-[35px] flex-nowrap w-max mr-12'>
        {dummyData.map((d) => (
          <SmallArticleCard
            key={d.id}
            img={d.img}
            title={d.title}
            subtitle={d.subtitle}
            time={d.time}
          />
        ))}
      </div>
    </div>
  )
}

export default SmallArticleSection
