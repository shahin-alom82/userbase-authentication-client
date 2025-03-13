import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Profile = () => {
      const { user } = useContext(AuthContext)
      return (
            <div className='mx-auto max-w-sm py-20'>
                  <div className='mt-8'>
                        <img src={user?.photoURL} alt="photoURL" className='rounded-full w-60 h-64' />
                        <h1>Name : {user?.displayName}</h1>
                        <h1>Name : {user?.email}</h1>
                  </div>
            </div>
      );
};

export default Profile;