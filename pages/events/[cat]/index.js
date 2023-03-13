import Circle from '@/components/circle';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Head from 'next/head'

const index = ({data}) => {
    return (
        <>
            <Head>
                <title>CAtagory Page - Events App</title>
                <meta name="description" content="This is App is created by Kaies Mahmud Nehal . Inspired by FreeCodeCamp." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <Circle/>
            </Head>
            <Navbar/>
            <main className=' min-h-[70vh] flex justify-center '>
                <div className='flex flex-col md:flex-row flex-wrap gap-10 w-100 items-center justify-center w-[80%]'>
                    {/* {
                        data.map(ev=>(
                            <a href={`events/${ev.id}`} key={ev.id} className="w-[45%] flex flex-col items-center justify-center">
                                <div className='  overflow-hidden rounded-lg hover:shadow-lg relative ho   '>
                                    <img className=' rounded-lg hover:scale-125 transition-all ease-in duration-300' src={ev.image} alt={ev.title} />
                                    <h2 className='w-full hover:bg-slate-800 block p-2 text-white font-bold text-lg absolute bottom-4  text-center
                                    transition-all duration-200'>{ev.title}</h2>
                                </div>
                            </a>
                        ))
                    } */}
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default index;

// export async function getStaticProps(){
//     const {events_categories} = await import('./../../../data/data.json')
//     return{
//         props:{
//             data:events_categories
//         }
//     }
// }