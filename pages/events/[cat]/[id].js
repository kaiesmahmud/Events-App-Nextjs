import Head from 'next/head'
import Circle from "@/components/circle";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Script from "next/script";

const SingleEventPage = ({data}) => {
    const eventData = data[0]
    return (
        <>
            <Head>
                <title>Single Event Page</title>
                <meta name="description" content={data.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <Circle/> */}
            <Navbar/>
            <main className="min-h-[100vh] text-center capitalize ">
                <h4>{eventData.city}</h4>
                <h1 className='text-lg md:text-2xl lg:text-4xl text-slate-900'>{eventData.title}</h1>
                <p className='py-5 text-xs md:text-sm'>{eventData.description}</p>
                
                <div className='flex justify-center items-center  overflow-hidden rounded-lg hover:shadow-lg relative m-5 '>
                    <img className=' rounded-lg ' src={eventData.image} alt={eventData.title} />
                </div>
            </main> 
            <Footer/>
        </>
    );
};

export default SingleEventPage;

export async function getStaticPaths(){
    const {allEvents} = await import('/data/data.json')
    const allPaths = allEvents.map(ev=>{
        return {
            params:{
                cat:ev.city,
                id:ev.id,
            }
        }
    })
    return{
        paths:allPaths,
        fallback:false
    }
}

export async function getStaticProps(context){
    console.log(context);
    const id = context.params.id;
    const {allEvents} = await import('/data/data.json');
    const eventData = allEvents.filter(ev=>id=== ev.id)
    console.log(eventData, " is data")
    return {
        props:{
            data:eventData,
        }
    }
}