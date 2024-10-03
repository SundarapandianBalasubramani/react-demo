import React from "react";
import { User, IUser } from "./User";
import  Table  from 'react-bootstrap/Table'
import { useGetUsersQuery } from "../../store/services/user";
export const UsersContainer: React.FC = () => {
  const {isLoading: loading, data: users, error} = useGetUsersQuery();
  
  const msg = error && 'message' in error ? error.message : "Sorry some thing went wrong";

  // const [users, setUsers] = useState<IUser[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | undefined>();
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await fetch(`${baseUrl}/users`);
  //       const users = await response.json();
  //       setUsers(users);
  //     } catch (e) {
  //       setError((e as unknown as Error).message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   })();
  // }, []);
  return <UsersPresentaion loading={loading} data={users || []} error={msg} />;
};
export const UsersPresentaion: React.FC<{
  loading: boolean;
  data: IUser[];
  error?: string;
}> = ({ loading, data, error }) => {
  return (
    <>
      {loading && !error && <div>...Loading</div>}
      {!loading && error && <div>...Sorry some thing went wrong</div>}
      {!loading && !error && (
        <div>
          <h1> Users</h1>
          <Table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Age</th>
                <th>Email</th>
                <th>Roles</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                 <User key={user.id} {...user} />
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
};
