import Head from 'next/head'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Circle from '@/components/circle';

const EventCatPage = ({data}) => {
    return (
        <>
            <Head>
                <title>Catagory Page - Events App</title>
                <meta name="description" content="This is App is created by Kaies Mahmud Nehal . Inspired by FreeCodeCamp." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <Circle/> */}
            <Navbar/>
            <main className=' min-h-[70vh] flex justify-center '>
                <div className='flex flex-col md:flex-row flex-wrap gap-10 w-100 items-center justify-center w-[80%]'>
                    {
                        data.map(ev=>(
                            <a href={`events/${ev.city}/${ev.id}`} key={ev.id} className="bg-slate-100 rounded-lg p-2
                             w-[90%] md:w-[45%] flex flex-col items-center justify-center
                             hover:bg-slate-200 hover:text-slate-800 transition-all duration-200 ease-in hover:shadow-lg">
                                <div className='  overflow-hidden rounded-lg hover:shadow-lg relative ho   '>
                                    <img className=' rounded-lg hover:scale-125 transition-all ease-in duration-200' src={ev.image} alt={ev.title} />
                                    {/* <h2 className='w-full hover:bg-slate-800 block p-2 text-white font-bold text-lg absolute bottom-4  text-center
                                    transition-all duration-200'>{ev.title}</h2> */}
                                </div>
                                <div className='p-2 text-center'>
                                    <h2 className='text-lg capitalize font-bold'>{ev.title}</h2>
                                    <hr />
                                    <p className='text-sm py-1 capitalize'>{ev.city}</p>
                                    <hr />
                                    <p className=' capitalize'>{ev.description}</p>
                                </div>
                               
                            </a>
                        ))
                    }
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default EventCatPage;

export async function getStaticProps(context){
    const {allEvents} = await import('./../../../data/data.json')
    const id = context?.params?.cat;
    const data = allEvents.filter(ev=> ev.city === id)
    console.log(data)
    return{
        props:{
            data:data
        }
    }
}
export async function getStaticPaths(){
    const {events_categories} = await import('../../../data/data.json')

    const allpaths = events_categories.map((ev)=>{
        return {
            params:{
                cat:ev.id.toString(),
            }
        }
    })
    console.log(allpaths);
    return{
        paths:allpaths,
        fallback:false
    }
}