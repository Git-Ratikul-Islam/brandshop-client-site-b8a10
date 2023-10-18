import { NavLink } from "react-router-dom";
import './Navbar.css';


const Navbar = () => {

      const links = <>


            <li className="text-[16px] font-semibold"><NavLink to="/" >Home</NavLink></li>
            <li className="text-[16px] font-semibold"><NavLink to="/addProduct" >Add product</NavLink></li >
            <li className="text-[16px] font-semibold"><NavLink to="/myCart" >My cart</NavLink></li >
            <li className="text-[16px] font-semibold"><NavLink to="/login">Log in</NavLink></li >






      </>;



      return (
            <div>
                  <div className="navbar bg-base-100">
                        <div className="navbar-start">
                              <div className="dropdown">
                                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                          {links}
                                    </ul>
                              </div>
                              <div className="flex items-center gap-2">
                                    <div>
                                          <img className="h-[40px] " src="https://i.ibb.co/r5mFFL9/Pulse-Tech.png" alt="" />
                                    </div>
                                    <div>
                                          <h1 className="font-bold text-3xl text-[#529fec]">PulseTech</h1>
                                    </div>
                              </div>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                              <ul className="menu menu-horizontal px-1 ">
                                    {links}
                              </ul>
                        </div>
                        <div className="navbar-end">
                              <ul tabIndex={0} className="menu  dropdown-content">

                                    <div className="flex gap-3">
                                          <div className="avatar">
                                                <div className="w-12 rounded-full">
                                                      <img src="https://i.ibb.co/1sZMWyx/pexels-prasanth-inturi-1051838.jpg" />
                                                </div>
                                          </div>
                                          <div className="items-center justify-center flex">

                                          </div>
                                    </div>

                              </ul>

                        </div>
                  </div>

            </div>
      );
};

export default Navbar;