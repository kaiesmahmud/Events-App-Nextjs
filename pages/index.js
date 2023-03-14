import { HomePage } from '@/components/HomePage/HomePage';
import Head from 'next/head'
import Link from 'next/link'

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Events App </title>
      </Head>
      <HomePage data={data}/>
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