import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import useRole from "../../../hocks/useRole";
import AdminMenu from "./Menu/AdminMenu";
import UserMenu from "./Menu/UserMenu";

const Sidebar = () => {
      const [isActive, setIsActive] = useState(false);
      const { logOut } = useContext(AuthContext)
      const navigate = useNavigate()

      const [role] = useRole()
      console.log('role', role)

      const handleLogout = () => {
            logOut()
            navigate("/")
      }

      return (
            <div
                  className={`z-10 md:fixed flex flex-col bg-[#072F7C] text-white w-64 h-full px-6 py-8 shadow-lg transition-transform transform duration-300 ease-in-out ${isActive ? "-translate-x-full" : "translate-x-0"
                        } md:translate-x-0`}
            >
                  {/* Navigation Links */}
                  <nav>
                        {
                              role === 'admin' && <AdminMenu />
                        }
                        {
                              role === 'user' && <UserMenu />
                        }
                        <button onClick={handleLogout} className="py-2 px-4 bg-indigo-600 w-full">Logout</button>

                  </nav>
                  <hr className="mt-10" />
                  <span className="mt-4"><NavLink to={"/dashboard/profile"}>Profile</NavLink></span>
            </div>
      );
};

export default Sidebar;
