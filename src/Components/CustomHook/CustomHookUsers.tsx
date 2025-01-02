import { useCustom } from "../../hooks";
import { UsersPresentaion } from "../Users";
import { IUser } from "../Users/User";

export const CustomHookUsers: React.FC = () => {
  const { details, loading, error } = useCustom<IUser>({ url: "users" });
  return <UsersPresentaion data={details} loading={loading} error={error} />;
};
