import { Route, Routes } from "react-router-dom";
import { LeftNav } from "../LeftNav";
import DigitalClock from "../../Components/DigitalClock";
import Counter from "../../Components/Counter";
import Reducer from "../../Components/Reducer";
import { Users } from "../Users";
import { makeStyles } from "@fluentui/react-components";
import { Employees } from "../Employees";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
  },
  nav: {
    width: "300px",
    height: "100%",
  },
  content: {
    width: "calc(100% - 300px)",
  },
});
export const Main: React.FC = () => {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <div className={classes.nav}>
        <LeftNav />
      </div>
      <section className={classes.content}>
        <Routes>
          <Route path="/digital-clock" element={<DigitalClock />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/reducer" element={<Reducer />} />
          <Route path="/users" element={<Users />} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </section>
    </main>
  );
};
