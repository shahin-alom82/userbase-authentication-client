import React from 'react';
import NavMenu from './NavMenu';
import { FaUsers } from 'react-icons/fa';

const AdminMenu = () => {
      return (
            <div >
                  <NavMenu title={'All User'} location={"/dashboard/alluser"} icon={FaUsers} />
                  <NavMenu title={'Manage User'} location={"/dashboard/manageuser"} icon={FaUsers} />
                  <NavMenu title={'Add User'} location={"/dashboard/adduser"} icon={FaUsers} />
            </div>
      );
};

export default AdminMenu;