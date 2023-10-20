const Featured = () => {
      return (
            <div>
                  <section className="dark:bg-[#529fed] text-white">
                        <div className="container p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                              <div>
                                    <h2 className="text-3xl font-bold  text-center sm:text-5xl ">Featured in Technology and Electronics</h2>
                                    <p className="max-w-3xl mx-auto mt-4 text-xl text-center ">
                                          Explore the latest innovations and trends in the world of technology and electronics.
                                    </p>
                              </div>
                              <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                                    <div>
                                          <h3 className="text-2xl font-bold  sm:text-3xl text-white">Discover Leading Brands</h3>
                                          <p className="mt-3 text-lg ">
                                                Learn about industry giants such as Apple, Samsung, Sony, Google, Intel, and many more. These companies are at the forefront of technological advancements, constantly pushing the boundaries of innovation.
                                          </p>
                                          <div className="mt-12 space-y-12">
                                                <div className="flex">
                                                      <div className="flex-shrink-0">
                                                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-[#0071e3] dark:text-white">
                                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                                  </svg>
                                                            </div>
                                                      </div>
                                                      <div className="ml-4">
                                                            <h4 className="text-lg font-medium leadi ">Innovations in Electronics</h4>
                                                            <p className="mt-2 ">
                                                                  Explore the latest advancements in electronics, from cutting-edge smartphones to state-of-the-art gadgets, all designed to make our lives more efficient and enjoyable.
                                                            </p>
                                                      </div>
                                                </div>
                                                <div className="flex">
                                                      <div className="flex-shrink-0">
                                                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-[#0071e3] dark:text-white">
                                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                                  </svg>
                                                            </div>
                                                      </div>
                                                      <div className="ml-4">
                                                            <h4 className="text-lg font-medium leadi ">Tech Industry Insights</h4>
                                                            <p className="mt-2 ">
                                                                  Stay updated with the latest trends and insights in the technology industry. From AI and IoT to cybersecurity and software development, we've got you covered.
                                                            </p>
                                                      </div>
                                                </div>
                                                <div className="flex">
                                                      <div className="flex-shrink-0">
                                                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-[#0071e3] dark:text-white">
                                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                                  </svg>
                                                            </div>
                                                      </div>
                                                      <div className="ml-4">
                                                            <h4 className="text-lg font-medium leadi ">The Future of Technology</h4>
                                                            <p className="mt-2 ">
                                                                  Dive into discussions about the future of technology, including topics like AI-driven advancements, space exploration, and the impact of technology on our daily lives.
                                                            </p>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    <div aria-hidden="true" className="mt-10 lg:mt-0 lg:ml-64">
                                          <img src="https://i.ibb.co/nzVyFrk/uriel-soberanes-Mx-Vk-WPi-JALs-unsplash.jpg" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                                    </div>
                              </div>
                        </div>
                  </section>
            </div>
      );
};

export default Featured;
