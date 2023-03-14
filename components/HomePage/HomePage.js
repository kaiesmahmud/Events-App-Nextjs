import Link from 'next/link'
import React from 'react'

export const HomePage = ({data}) => {
  return (
    <main className='min-h-[100vh]'>
        <div className='px-10 md:px-20 lg:px-36 py-5 flex flex-col gap-y-20'>
          {
            data.map((ev,id)=>(
              <Link href={`events/${ev.id}`} key={ev.title} passHref>
                <div className='flex flex-col lg:flex-row gap-5 '>
                  <div className={`w-[90%] lg:w-[50%] overflow-hidden rounded-lg ${id%2==0?'':" lg:order-2"}`}>
                    <img src={ev.image} alt={ev.title} className='w-[100%] rounded hover:scale-125 transition-all duration-200' />
                  </div>
                  <div className='w-[90%] lg:w-[50%] flex flex-col justify-center '>
                    <h2 className='font-bold text-lg md:text-xl lg:text-2xl'>{ev.title}</h2>
                    <p className=' text-opacity-50'>{ev.description}</p>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
    </main>
  )
}
