import React from 'react'

export const SingleEvent = ({eventData}) => {
  return (
    <main className="min-h-[100vh] text-center capitalize ">
        <h4>{eventData.city}</h4>
        <h1 className='text-lg md:text-2xl lg:text-4xl text-slate-900'>{eventData.title}</h1>
        <p className='py-5 text-xs md:text-sm'>{eventData.description}</p>
        <div className='flex justify-center items-center  overflow-hidden rounded-lg   m-5 '>
            <img className='rounded-lg ' src={eventData.image} alt={eventData.title} />
        </div>
    </main> 
  )
}
