import { Alert, Snackbar } from '@mui/material';
import React, { useState } from 'react'

export const SingleEvent = ({eventData}) => {
  const [open, setOpen] = useState(false);
  const handleSubmit=(e)=>{
    e.preventDefault();
    e.target.email.value = ""
    setOpen(true)
  }
  return (
    <main className="min-h-[100vh] text-center capitalize flex flex-col items-center ">
        <h4>{eventData.city}</h4>
        <h1 className='text-lg md:text-2xl lg:text-4xl text-slate-900'>{eventData.title}</h1>
        <p className='py-5 text-xs md:text-sm'>{eventData.description}</p>
        <form class="w-full max-w-sm" onSubmit={handleSubmit}>
          <div class="flex items-center border-b border-slate-500 py-2">
            <input required class="appearance-none bg-transparent border-none w-full  mr-3 py-1 px-2 placeholder:text-slate-700
             leading-tight focus:outline-none"name='email' type="email" placeholder="submit@email.com" aria-label="Email"/>
            <button type="submit" class="flex-shrink-0 bg-slate-500 hover:bg-slate-700 border-slate-500
             hover:border-slate-700 text-sm border-4 text-white py-1 px-2 rounded">Join us</button>
          </div>
        </form>
        <div className='flex justify-center items-center  overflow-hidden rounded-lg   m-5 '>
            <img className='rounded-lg ' src={eventData.image} alt={eventData.title} />
        </div>
        {/* ---------------------SnackBar------------------------- */}
        <div>
            { open && (
            <Snackbar 
              open={open} 
              autoHideDuration={4000} 
              onClose={()=>setOpen(false)} 
              anchorOrigin={{ vertical:'top', horizontal:'center' }}>
                    <Alert 
                      onClose={()=>setOpen(false)} 
                      severity="success" 
                      sx={{ width: '100%' }}>
                        Submitted Successfully
                    </Alert>
                </Snackbar>)
                }
        </div>
    </main> 
  )
}
