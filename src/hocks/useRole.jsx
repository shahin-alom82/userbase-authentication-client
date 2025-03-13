import React, { use, useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useRole = () => {
      const { user, loading } = useContext(AuthContext)
      const axiosSecure = useAxiosSecure()

      const { data: role, isPending } = useQuery({
            queryKey: ['role', user?.email],
            queryFn: async () => {
                  const { data } = await axiosSecure.get(`/users/${user?.email}`);
                  console.log('data', data)
                  return data.role;
            }
      })

      return [role, isPending]
};

export default useRole;