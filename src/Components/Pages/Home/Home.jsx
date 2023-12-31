import { Link } from "react-router-dom";
import Brands from "./Brands";
import Featured from "./Featured";
import Blog from "./Blog";


const Home = () => {
      return (

            <>
                  <section className="bg-white dark:bg-[#529fed] min-h-[70vh]">
                        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
                              <div className="mr-auto place-self-center lg:col-span-7  mt-10">
                                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Get your favorite product at your price</h1>
                                    <p className="max-w-2xl mb-6 font-light text-white  lg:mb-8 md:text-lg lg:text-xl ">From checkout to global tech companies all over, we provide the authentic product from all over the country </p>
                                    <a className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                                          Get started
                                          <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </a>
                                    <Link to="/addProduct">  <a className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg  focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 hover:bg-blue-600 active:bg-blue-700 ">
                                          Add Product
                                    </a></Link>
                              </div>
                              <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                                    <img className="mt-24" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"></img>
                              </div>
                        </div>
                  </section>

                  {/* <Features></Features> */}
                  <Brands></Brands>
                  <Featured></Featured>
                  <Blog></Blog>
            </>

      );
};

export default Home;