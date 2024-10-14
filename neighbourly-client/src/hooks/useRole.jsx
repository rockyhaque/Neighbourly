import useAuth from "./useAuth";
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: role = '', isLoading} = useQuery({
        queryKey: ['role', user?.email],
        // false & true
        enabled: !loading && !!user?.email,
        queryFn: async()=> {
            const {data} = await axiosSecure(`/user/${user?.email}`)
            return data.role
        }
    })

    return [role, isLoading];
};

export default useRole;



// user?.email = "rockyhaque71@gmail.com";
// For truthy value
// !!user?.email = true