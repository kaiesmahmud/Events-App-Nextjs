import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Circle from '@/components/circle';
import Head from 'next/head'


const About = () => {
    return (
        <>
            <Head>
                <title>About Page - Events App</title>
            </Head>
            <div className='text-3xl font-bold text-center min-h-[100vh]'>
                    This is about page
            </div>
        </>
    );
};

export default About;