import { Route, Routes } from "react-router-dom";
import DigitalClock from "../DigitalClock";
import Counter from "../Counter";
import { UsersContainer, UsersPresentaion } from "../Users";
import { IUser } from "../Users/User";
import { HOC } from "../HOC";
import { EmployeesContainer } from "../Employees";
import User from "../User";
import { ComponentWithError } from "../ErrorBoundary/ComponentWithError";
import ErrorBoundary from "../ErrorBoundary";
import { BlogComponent } from "../Compound/Blog";
import { data } from "../Compound/data";
import { Compound } from "../Compound";
import { CustomHookUsers } from "../Custom/CustomHookUsers";
import { RenderProps } from "../RenderProps";
import Reducer from "../Reducer";

const UsersDetails: React.FC = () => {
  return HOC<IUser>({
    Component: UsersPresentaion,
    url: "users",
  });
};

// const EmployeeDetails: React.FC = () => {
//   return HOC<IEmployee>({
//     Component: EmployeesPresentaion,
//     url: "employees",
//   });
// };

export const Main: React.FC = () => {
  return (
    <main className="main-content">
       <Routes>
        <Route path="/" element={<></>} />
        <Route path="/user" element={<User />} />
        <Route path="/digital-clock" element={<DigitalClock />} />
        <Route path="/counter" element={<Reducer />} />
        <Route path="/users" element={<UsersContainer />} />
        <Route path="/employees" element={<EmployeesContainer />} />
        <Route path="/hocusers" element={<UsersDetails />} />
        <Route path="/error" element={<ErrorBoundary><ComponentWithError /></ErrorBoundary> } />   
        <Route path="/blog" element={<BlogComponent {...data} />}   />
        <Route path="/Compound" element={<Compound  />}   />
        <Route path="/customhook" element={<CustomHookUsers  />}   />
        <Route path="/renderprops" element={<RenderProps url="users" render={(data,loading, error)=>{
          return <UsersPresentaion data={data as IUser[]} loading={loading} error={error} />
        }}  />}   />      
      </Routes>
    </main>
  );
};
