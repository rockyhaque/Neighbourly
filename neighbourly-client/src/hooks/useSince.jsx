import useAuth from "./useAuth";
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from "./useAxiosSecure";

const useSince = () => {
    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: since = '', isLoading} = useQuery({
        queryKey: ['since', user?.email],
        // false & true
        enabled: !loading && !!user?.email,
        queryFn: async()=> {
            const {data} = await axiosSecure(`/user/${user?.email}`)
            return data.timestamp
        }
    })

    return [since, isLoading];
};

export default useSince;


