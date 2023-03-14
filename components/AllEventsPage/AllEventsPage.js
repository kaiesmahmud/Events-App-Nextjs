import Link from 'next/link'
import React from 'react'

export const AllEventsPage = ({data}) => {
  return (
    <main className=' min-h-[70vh] flex justify-center '>
        <div className='flex flex-col md:flex-row flex-wrap gap-10 w-100 items-center justify-center w-[80%]'>
            {
                data.map(ev=>(
                    
                    <Link href={`events/${ev.id}`} key={ev.id} className="w-[45%] flex flex-col items-center justify-center" passHref>
                        <div className='  overflow-hidden rounded-lg hover:shadow-lg relative ho   '>
                            <img className=' rounded-lg hover:scale-125 transition-all ease-in duration-300' src={ev.image} alt={ev.title} />
                            <h2 className='w-full hover:bg-slate-800 block p-2 text-white font-bold text-lg absolute bottom-4  text-center
                            transition-all duration-200'>{ev.title}</h2>
                        </div>
                    </Link>
                ))
            }
        </div>
    </main>
  )
}
