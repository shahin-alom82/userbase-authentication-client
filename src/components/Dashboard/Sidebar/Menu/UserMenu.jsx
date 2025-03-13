import React from 'react';
import NavMenu from './NavMenu';
import { FaHome } from 'react-icons/fa';

const UserMenu = () => {
      return (
            <div>
                  <NavMenu title={"User Home"} location={"/dashboard/userhome"} icon={FaHome} />
                  <NavMenu title={"User Home"} location={"/dashboard/userhome"} icon={FaHome} />
                  <NavMenu title={"User Home"} location={"/dashboard/userhome"} icon={FaHome} />
            </div>
      );
};

export default UserMenu;