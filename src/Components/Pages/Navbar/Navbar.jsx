import { NavLink } from "react-router-dom";
import './Navbar.css';
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from 'sweetalert2';


const Navbar = () => {

      const { user, logOut } = useContext(AuthContext);
      const handleLogOut = () => {
            logOut()
                  .then(() => {
                        console.log('User logged out');
                        Swal.fire(
                              'Logout Successful!',
                              'User logged out successfully!',
                              'success'
                        );
                  })
                  .catch(error => {
                        console.error(error);
                        Swal.fire({
                              icon: 'error',
                              title: 'Oops...',
                              text: 'Something went wrong try again!',
                        });
                  });
      };


      const links = <>


            <li className="text-[16px] font-semibold"><NavLink to="/" >Home</NavLink></li>
            <li className="text-[16px] font-semibold"><NavLink to="/addProduct" >Add product</NavLink></li >
            <li className="text-[16px] font-semibold"><NavLink to="/myCart" >My cart</NavLink></li >







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
                              {user && <span className="text-black mr-2 font-bold">{user.displayName
                              }</span>}

                              {user ? <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-4">
                                    <div className="w-10 rounded-full">


                                          <img src={user.photoURL} />


                                    </div>

                              </label> : ""}
                              <div>
                                    <NavLink to="/login">
                                          {
                                                user ? <button onClick={handleLogOut} className="btn btn-sm  bg-[#f15b43]  border-none text-white">Log out</button> : <button className="btn btn-sm  bg-[#65c9bb] border-none text-white">Log in</button>
                                          }
                                    </NavLink>
                              </div>

                        </div>
                  </div>

            </div>
      );
};

export default Navbar;