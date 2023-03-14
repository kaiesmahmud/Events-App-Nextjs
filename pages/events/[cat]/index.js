import Head from 'next/head'
import { CatagoryPage } from '@/components/CatagoryPage.js/CatagoryPage';

const EventCatPage = ({data,pageName}) => {
    return (
        <>
            <Head>
                <title>Catagory Page - Events App</title>
            </Head>
            <CatagoryPage pageName={pageName} data={data}/>
        </>
    );
};

export default EventCatPage;

export async function getStaticProps(context){
    const {allEvents} = await import('./../../../data/data.json')
    const id = context?.params?.cat;
    const data = allEvents.filter(ev=> ev.city === id)
    // console.log(data)
    return{
        props:{
            data,
            pageName:id
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
    // console.log(allpaths);
    return{
        paths:allpaths,
        fallback:false
    }
}