
import Cards from './Cards';

const HeroSection = () => {


    return (
        <div className='w-full h-full bg-[#050023] relative -z-10'>

            <div class=" absolute inset-0  bg-gradient-to-b w-80 rounded-full h-96 blur-3xl from-purple-600 opacity-30 via-purple-500 to-purple-400 "></div>

            <section className="bg-[#050023] text-gray-100 mx-32 pt-20">

                <div className="container bg-gradient-to-r from-[#0d0924] rounded-md to-transparent   bg-[#050023] flex flex-col-reverse  justify-center p-6 mx-auto  lg:flex-row lg:justify-between">

                    <div className="flex flex-col justify-center p-12 text-center rounded-sm md:w-[55%] lg:text-left">
                        <h1 className="text-4xl font-bold leadi md:text-5xl">
                            The Metaverse to Diversity & Customized Technology
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">
                            Dictum aliquam porta in condimentum ac integer

                            Connecting &  <br /> Linking you to ideal       software resources, freeing you to prioritize what truly counts.
                        </p>
                        <div className="flex space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <button class="px-6 py-2 bg-[#6318F1] text-white font-bold rounded-full transition-transform transform-gpu  hover:shadow-lg">
                                Join Now
                            </button>
                            <button class="px-6 py-2 bg-[#35314D] text-white font-bold rounded-full transition-transform transform-gpu  hover:shadow-lg">
                                Explore &#160;
                            </button>

                        </div>

                    </div>


                    <div className="flex  justify-center  md:w-[45%]  relative ">

                        <Cards />

                    </div>

                </div>

            </section>
        </div>
    )
}

export default HeroSection