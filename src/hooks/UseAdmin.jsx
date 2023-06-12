import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import UseAxiosSecure from "./UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const UseAdmin = () => {
   const {user} = useContext(AuthContext)
   const [axiosSecure] = UseAxiosSecure();
   const {data: isAdmin, isLoading: isAdminLoading}= useQuery({
      queryKey: ['isAdmin', user?.email],
      queryFn: async()=>{
         const res = await axiosSecure.get(`/users/admin/${user?.email}`)
         return res.data.admin
      }
   })
   return [isAdmin, isAdminLoading]
};

export default UseAdmin;