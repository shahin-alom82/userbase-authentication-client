import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Dashboard/Sidebar/Sidebar';

const DashboardLayout = () => {
      return (
            <div className="relative min-h-screen flex bg-gray-200">
                  <Sidebar />
                  <div className="flex-1 lg:ml-64 h-screen">
                        <div className="w-full min-h-screen bg-[#4396D9]">
                              <div className="">
                                    <Outlet />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default DashboardLayout;