import Head from 'next/head'

const About = () => {
    return (
        <>
            <Head>
                <title>About Page - Events App</title>
            </Head>
            <main className='   min-h-[100vh] px-5 md:px-10 lg:px-20 py-5 text-justify'>
                <h2 className='text-xl md:text-3xl font-semibold pb-3'>About Page</h2>
                <hr className=' border-black'/>
                <p className='text-lg py-2 pb-[60px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nesciunt modi nostrum laborum aliquam minima quasi totam officia velit repellendus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe earum at unde dolor eum laborum debitis id odit, possimus repellendus repudiandae numquam dolorem ex illo fuga quisquam corporis temporibus! Explicabo delectus voluptatibus exercitationem incidunt repellat! Dolorum quo consectetur repellat accusantium?</p>
                <h3 className='text-lg font-bold px-5'>Lorem ipsum dolor sit amet.</h3>
                <p className='text-lg px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nesciunt modi nostrum laborum aliquam minima quasi totam officia velit repellendus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe earum at unde dolor eum laborum debitis id odit, possimus repellendus repudiandae numquam dolorem ex illo fuga quisquam corporis temporibus! Explicabo delectus voluptatibus exercitationem incidunt repellat! Dolorum quo consectetur repellat accusantium?</p>
                <div className='p-5'>
                    <h3 className='text-xl md:text-2xl font-semibold pb-3'>Why us</h3>
                    <hr className=' border-black'/>
                </div>
                <div className='flex flex-col md:flex-row gap-5 justify-around items-center'>
                    <div className='w-[90%]  md:w-[50%]'>
                        <h3 className='text-lg font-bold px-5'>Lorem ipsum dolor sit amet.</h3>
                        <p className='text-lg px-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nesciunt modi nostrum laborum aliquam minima quasi totam officia velit repellendus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe earum at unde dolor eum laborum debitis id odit, possimus repellendus repudiandae numquam dolorem ex illo fuga quisquam corporis temporibus! Explicabo delectus voluptatibus exercitationem incidunt repellat! Dolorum quo consectetur repellat accusantium?</p>
                    </div>
                    <div className='w-[90%]  md:w-[50%]'>
                        <h3 className='text-lg font-bold px-5'>Lorem ipsum dolor sit amet.</h3>
                        <p className='text-lg px-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nesciunt modi nostrum laborum aliquam minima quasi totam officia velit repellendus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe earum at unde dolor eum laborum debitis id odit, possimus repellendus repudiandae numquam dolorem ex illo fuga quisquam corporis temporibus! Explicabo delectus voluptatibus exercitationem incidunt repellat! Dolorum quo consectetur repellat accusantium?</p>
                    </div>
                </div>
            </main>
        </>
    );
};

export default About;