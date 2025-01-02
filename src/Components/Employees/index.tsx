import React, { useEffect, useState } from "react";
import { baseUrl } from "../../App";
import { IEmployee, Employee } from "./Employee";

export const EmployeesContainer: React.FC = () => {
  const [employees, setEmployees] = useState<IEmployee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${baseUrl}/employees`);
        const users = await response.json();
        setEmployees(users);
      } catch (e) {
        setError((e as unknown as Error).message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return (
    <EmployeesPresentaion loading={loading} data={employees} error={error} />
  );
};
export const EmployeesPresentaion: React.FC<{
  loading: boolean;
  data: IEmployee[];
  error?: string;
}> = ({ loading, data, error }) => {
  return (
    <>
      {loading && !error && <div>...Loading</div>}
      {!loading && error && <div>...Sorry some thing went wrong</div>}
      {!loading && !error && (
        <div>
          <h1> Employess</h1>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {data.map((emp) => (
                <tr key={emp.id}>
                  <Employee {...emp} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
