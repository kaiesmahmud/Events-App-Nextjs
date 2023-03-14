import { AllEventsPage } from '@/components/AllEventsPage/AllEventsPage';
import Head from 'next/head'

const EventPage = ({data}) => {
    return (
        <>
            <Head>
                <title>Events Page - Events App</title>
            </Head>
            <AllEventsPage data={data}/>
        </>
    );
};

export default EventPage;

export async function getStaticProps(){
    const {events_categories} = await import('./../../data/data.json')
    return{
        props:{
            data:events_categories
        }
    }
}