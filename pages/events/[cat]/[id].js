import Circle from "@/components/circle";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from 'next/head'
import Script from "next/script";

const page = () => {
    return (
        <>
            <Head>
                <title>Specific Event-- Events App </title>
                <meta name="description" content="This is App is created by Kaies Mahmud Nehal . Inspired by FreeCodeCamp." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                {/* <link rel="stylesheet" href="./../../public/cursor/cursor.css" /> */}
                <Circle/>
                <Script src="./../cursor/cursor.js" defer></Script>
    </Head>
            <Navbar/>
            <main className="min-h-[100vh]">
                this is a main section
               
            </main>
            <Footer/>
        </>
    );
};

export default page;