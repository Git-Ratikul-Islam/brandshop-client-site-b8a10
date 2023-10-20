const Blog = () => {
      return (
            <section className="bg-white dark:text-gray-100">
                  <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                        <a rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-[#529fed]">
                              <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-[#529fed]" />
                              <div className="p-6 space-y-2 lg:col-span-5">
                                    <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Exploring the Latest in Technology and Electronics</h3>
                                    <span className="text-xs">Published on February 19, 2021</span>
                                    <p>
                                          Join us on a journey to discover the cutting-edge world of technology and electronics. From industry giants like Apple, Samsung, Sony, Google, and Intel to emerging trends and innovations, this blog post delves into the ever-evolving landscape of tech and gadgets.
                                    </p>
                              </div>
                        </a>
                        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                              <a rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-[#529fed]">
                                    <img role="presentation" className="object-cover w-full rounded h-44" src="https://source.unsplash.com/random/480x360?1" />
                                    <div className="p-6 space-y-2">
                                          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">The Evolution of Smartphones</h3>
                                          <span className="text-xs">Published on January 21, 2021</span>
                                          <p>
                                                Explore the rapid evolution of smartphones and their impact on our daily lives. From the first mobile phone to the latest flagship devices, this post covers the incredible journey of handheld technology.
                                          </p>
                                    </div>
                              </a>
                              <a rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-[#529fed]">
                                    <img role="presentation" className="object-cover w-full rounded h-44 " src="https://source.unsplash.com/random/480x360?2" />
                                    <div className="p-6 space-y-2">
                                          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Revolutionizing the Gaming Industry</h3>
                                          <span className="text-xs">Published on January 22, 2021</span>
                                          <p>
                                                Delve into the world of gaming and its transformation over the years. From classic arcade games to cutting-edge virtual reality experiences, discover how technology has revolutionized the gaming industry.
                                          </p>
                                    </div>
                              </a>
                              <a rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-[#529fed]">
                                    <img role="presentation" className="object-cover w-full rounded h-44 " src="https://source.unsplash.com/random/480x360?3" />
                                    <div className="p-6 space-y-2">
                                          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">The Future of Electronics</h3>
                                          <span className="text-xs">Published on January 23, 2021</span>
                                          <p>
                                                Take a glimpse into the future of electronics and technology. Explore concepts like AI, IoT, and the innovative devices that are shaping our lives in exciting ways.
                                          </p>
                                    </div>
                              </a>
                              <a rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-[#529fed] hidden sm:block">
                                    <img role="presentation" className="object-cover w-full rounded h-44 " src="https://source.unsplash.com/random/480x360?4" />
                                    <div className="p-6 space-y-2">
                                          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">The Impact of Tech on Healthcare</h3>
                                          <span className="text-xs">Published on January 24, 2021</span>
                                          <p>
                                                Discover how technology is reshaping the healthcare industry. From telemedicine to medical breakthroughs, this post explores the profound impact of tech on our well-being.
                                          </p>
                                    </div>
                              </a>
                              <a rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-[#529fed] hidden sm:block">
                                    <img role="presentation" className="object-cover w-full rounded h-44 " src="https://source.unsplash.com/random/480x360?5" />
                                    <div className="p-6 space-y-2">
                                          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Tech Innovations for a Greener Future</h3>
                                          <span className="text-xs">Published on January 25, 2021</span>
                                          <p>
                                                Explore how technology is driving environmental sustainability. Learn about innovations in renewable energy, eco-friendly products, and the tech industry's role in creating a greener future.
                                          </p>
                                    </div>
                              </a>
                              <a rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-[#529fed] hidden sm:block">
                                    <img role="presentation" className="object-cover w-full rounded h-44 " src="https://source.unsplash.com/random/480x360?6" />
                                    <div className="p-6 space-y-2">
                                          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Exploring the World of Wearable Tech</h3>
                                          <span className="text-xs">Published on January 26, 2021</span>
                                          <p>
                                                Step into the world of wearable technology and smart devices. From fitness trackers to augmented reality glasses, discover the exciting possibilities of wearable tech in our daily lives.
                                          </p>
                                    </div>
                              </a>
                        </div>
                  </div>
            </section>
      );
};

export default Blog;
