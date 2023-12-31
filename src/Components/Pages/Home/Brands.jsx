import { Link } from 'react-router-dom';
import './Brand.css';

import './Brand.css';

const Brands = () => {
      return (
            <>
                  <h1 className='text-5xl text-center mt-4'> Our Brands</h1>
                  <div className="min-h-[70vh] md:mr-0 mr-40">

                        <div className="grid lg:grid-cols-3 md:grid-cols-2 md:w-6/6 grid-cols-1 lg:w-4/6 mt-16 mx-auto gap-5 ">
                              <Link to="/productsAll">
                                    <div className="card-container">
                                          <div className="card w-[400px] h-[270px] bg-base-100 shadow-xl image-full">
                                                <figure>
                                                      <img className="object-cover" src="https://i.ibb.co/vjFQ336/pexels-ivan-babydov-7789851.jpg" />
                                                </figure>
                                                <div className="card-body">
                                                      <h2 className="card-title">Apple</h2>
                                                </div>
                                                <div className="shine-overlay"></div>
                                          </div>
                                    </div>
                              </Link>
                              <div className="card-container">
                                    <Link to="/productsAll">
                                          <div className="card w-[400px] h-[270px]  bg-base-100 shadow-xl image-full">
                                                <figure>
                                                      <img src="https://i.ibb.co/wNbRgkR/jonathan-kemper-po-Sms2-Ezf-NY-unsplash.jpg" alt="Shoes" />
                                                </figure>
                                                <div className="card-body">
                                                      <h2 className="card-title">Samsung</h2>
                                                </div>
                                                <div className="shine-overlay"></div>
                                          </div></Link>
                              </div>
                              <div className="card-container">
                                    <Link to="/productsAll">
                                          <div className="card w-[400px]  h-[270px]  bg-base-100 shadow-xl image-full">
                                                <figure>
                                                      <img src="https://i.ibb.co/cb20JcV/boliviainteligente-Hv4-KMUMQ4-Rw-unsplash.jpg" alt="Shoes" />
                                                </figure>
                                                <div className="card-body">
                                                      <h2 className="card-title">Sony</h2>
                                                </div>
                                                <div className="shine-overlay"></div>
                                          </div></Link>
                              </div>
                              <div className="card-container">
                                    <Link to="/productsAll">
                                          <div className="card w-[400px]  h-[270px]  bg-base-100 shadow-xl image-full">
                                                <figure>
                                                      <img src="https://i.ibb.co/7YjKtHR/boliviainteligente-z7-ICBEMUJfw-unsplash.jpg" alt="Shoes" />
                                                </figure>
                                                <div className="card-body">
                                                      <h2 className="card-title">Google</h2>
                                                </div>
                                                <div className="shine-overlay"></div>
                                          </div></Link>
                              </div>
                              <Link to="/productsAll">

                                    <div className="card-container">
                                          <div className="card w-[400px]  h-[270px]  bg-base-100 shadow-xl image-full">
                                                <figure>
                                                      <img src="https://i.ibb.co/XbvmK9s/rubaitul-azad-y-Yq-JKJ0-GO64-unsplash.jpg" alt="Shoes" />
                                                </figure>
                                                <div className="card-body">
                                                      <h2 className="card-title">Intel</h2>
                                                </div>
                                                <div className="shine-overlay"></div>
                                          </div>
                                    </div>
                              </Link>
                              <Link to="/productsAll">
                                    <div className="card-container">
                                          <div className="card w-[400px]  h-[270px]  bg-base-100 shadow-xl image-full">
                                                <figure>
                                                      <img src="https://i.ibb.co/56jw1Zn/timothy-dykes-n-Wgp-Ce-LQa4-unsplash.jpg" alt="Shoes" />
                                                </figure>
                                                <div className="card-body">
                                                      <h2 className="card-title">AMD RYZEN</h2>
                                                </div>
                                                <div className="shine-overlay"></div>
                                          </div>
                                    </div>
                              </Link>
                        </div>
                  </div>
            </>
      );
};

export default Brands;



