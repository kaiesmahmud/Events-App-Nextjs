import React from 'react'
import Link from 'next/link'

export const CatagoryPage = ({pageName,data}) => {
  return (
    <>
        <h2 className='text-xl md:text-3xl lg:text-4xl font-bold text-center text-slate-800 p-5'>
                Events in {pageName}
        </h2>
        <main className=' min-h-[70vh] flex   justify-center '>
            <div className='flex flex-col md:flex-row flex-wrap gap-10 w-100 items-center justify-center w-[80%]'>
                {
                    data.map(ev=>(
                        <Link href={`${ev.city}/${ev.id}`} key={ev.id} className="bg-slate-100 rounded-lg p-2
                            w-[90%] lg:w-[45%] flex flex-col items-center justify-center
                            hover:bg-slate-200 hover:text-slate-800 transition-all duration-200 ease-in hover:shadow-lg" passHref>
                            <div className='  overflow-hidden rounded-lg hover:shadow-lg relative ho   '>
                                <img className=' rounded-lg hover:scale-125 transition-all ease-in duration-200' src={ev.image} alt={ev.title} />
                            </div>
                            <div className='p-2 text-center'>
                                <h2 className='text-lg capitalize font-bold'>{ev.title}</h2>
                                <hr />
                                <p className='text-sm py-1 capitalize'>{ev.city}</p>
                                <hr />
                                <p className=' capitalize'>{ev.description}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </main>
    </>
  )
}
