import Head from 'next/head'
import Script from 'next/script'
// import Image from 'next/image'

//Components
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Circle from '@/components/circle'
import Image from 'next/image'
import Link from 'next/link'

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Events App </title>
        <meta name="description" content="This is App is created by Kaies Mahmud Nehal . Inspired by FreeCodeCamp." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        
      <Navbar/>
      <main className='min-h-[100vh]'>
        <div>
          {
            data.map(ev=>(
              
              <Link href={`events/${ev.id}`} key={ev.title} passHref>
                {/* <Image src={ev.image} alt={ev.id} width={'500'} height={'300'} className="w-[500px]"/> */}
                <img src={ev.image} alt={ev.title} className='w-[200px]' />
                <h2>{ev.title}</h2>
                <p>{ev.description}</p>
              </Link>
            ))
          }
        </div>
      </main>
      <Footer/>
    </>
  )
}

export async function getServerSideProps() {
  const {events_categories} = await import('../data/data.json');
  // console.log(events_categories);
  return {
    props:{
      // title:"Hellow Buddy",
      data:events_categories,
    }
  }
}