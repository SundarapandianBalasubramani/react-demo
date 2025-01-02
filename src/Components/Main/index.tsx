import { Route, Routes } from "react-router-dom";
import DigitalClock from "../DigitalClock";
import Counter from "../Counter";
import Reducer from "../Reducer";
import { UsersContainer, UsersPresentaion } from "../Users";
import { RenderProps } from "../RenderProps";
import { Compound } from "../Compound";
import { Blog } from "../Compound/Blog";
import { CustomHookUsers } from "../CustomHook/CustomHookUsers";
import { ComponentWithErrorWrapper } from "../ErrorBoundary/ComponentWithError";
import { IUser } from "../Users/User";
import { HOC } from "../HOC";

import { data } from "../Compound/data";
import { IEmployee } from "../Employees/Employee";
import { EmployeesContainer, EmployeesPresentaion } from "../Employees";

const UsersDetails: React.FC = () => {
  return HOC<IUser>({
    Component: UsersPresentaion,
    url: "users",
  });
};

const EmployeeDetails: React.FC = () => {
  return HOC<IEmployee>({
    Component: EmployeesPresentaion,
    url: "employees",
  });
};

export const Main: React.FC = () => {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/digital-clock" element={<DigitalClock />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/reducer" element={<Reducer />} />
        <Route path="/users" element={<UsersContainer />} />
        <Route path="/employees" element={<EmployeesContainer />} />
        <Route path="/hocusers" element={<UsersDetails />} />
        <Route path="/hocemployees" element={<EmployeeDetails />} />
        <Route path="/error" element={<ComponentWithErrorWrapper />} />
        <Route path="/customhook" element={<CustomHookUsers />} />
        <Route path="/blog" element={<Blog {...data} />} />
        <Route path="/compound" element={<Compound />} />
        <Route
          path="/renderprops"
          element={
            <RenderProps
              url="users"
              render={(data: IUser[], loading: boolean, error?: string) => {
                return (
                  <UsersPresentaion
                    data={data}
                    loading={loading}
                    error={error}
                  />
                );
              }}
            />
          }
        />
        <Route path="/" element={<></>} />
      </Routes>
    </main>
  );
};
