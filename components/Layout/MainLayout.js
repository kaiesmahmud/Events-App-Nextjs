import React from 'react'
import Head from 'next/head'
import Footer from '../Footer'
import Navbar from '../Navbar'

export const MainLayout = ({children}) => {
  return (
    <>
        <Head>
            <meta name="description" content="This is App is created by Kaies Mahmud Nehal . Inspired by FreeCodeCamp." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            
        </Head>
            {/* <Script src="/components/cursor/cursor.js"  defer ></Script> */}
            {/* <Circle/> */}
        <Navbar/>
        {children}
        <Footer/>
    </>
  )
}
