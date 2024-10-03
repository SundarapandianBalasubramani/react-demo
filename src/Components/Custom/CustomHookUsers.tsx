
import { UsersPresentaion } from "../Users";
import { IUser } from "../Users/User";
import { useCustom } from "./useCustom"

export const CustomHookUsers: React.FC = () => {
    const {data, loading, error } = useCustom<IUser>({url:'users'});
    return <UsersPresentaion data={data} loading={loading} error={error} />
}