import Link from 'next/link'
import React from 'react'

export const HomePage = ({data}) => {
  return (
    <main className='min-h-[100vh]'>
        <div>
          {
            data.map(ev=>(
              <Link href={`events/${ev.id}`} key={ev.title} passHref>
                <img src={ev.image} alt={ev.title} className='w-[200px]' />
                <h2>{ev.title}</h2>
                <p>{ev.description}</p>
              </Link>
            ))
          }
        </div>
    </main>
  )
}
