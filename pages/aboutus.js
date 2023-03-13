import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Circle from '@/components/circle';
import Head from 'next/head'


const About = () => {
    return (
        <>
            <Head>
                <title>About Page - Events App</title>
                <meta name="description" content="This is App is created by Kaies Mahmud Nehal . Inspired by FreeCodeCamp." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Circle/>
            <Navbar/>
            <div className='text-3xl font-bold text-center min-h-[100vh]'>
                    This is about page
            </div>
            <Footer/>
        </>
    );
};

export default About;