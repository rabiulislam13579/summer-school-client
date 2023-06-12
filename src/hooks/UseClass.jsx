import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import UseAxiosSecure from './UseAxiosSecure';


const UseClass = () => {
    const {user, loading}= useContext(AuthContext)

    // const token = localStorage.getItem('access-token')
    const [axiosSecure] = UseAxiosSecure();

    const { isLoading, refetch, data: enrolls=[] } = useQuery({
        queryKey: ['class', user?.email],
        enabled: !loading,
        // queryFn: async ()=>{
        //     const response =await fetch(`http://localhost:5000/enrolled?email=${user?.email}`
        //     ,{headers:{
        //         authorization: `bearer ${token}`
        //     }})
        //     return response.json()
        // }
        queryFn: async ()=>{
            const res =await axiosSecure(`/enrolled?email=${user?.email}`)
            return res.data;
        }
      })


      return [enrolls, refetch, isLoading]
};

export default UseClass;