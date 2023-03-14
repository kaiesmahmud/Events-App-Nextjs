import { SingleEvent } from '@/components/SingleEvent/SingleEvent';
import Head from 'next/head'

const SingleEventPage = ({data}) => {
    const eventData = data[0]
    return (
        <>
            <Head>
                <title>Single Event Page</title>
            </Head>
            <SingleEvent eventData={eventData}/>
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
    // console.log(context);
    const id = context.params.id;
    const {allEvents} = await import('/data/data.json');
    const eventData = allEvents.filter(ev=>id=== ev.id)
    // console.log(eventData, " is data")
    return {
        props:{
            data:eventData,
        }
    }
}