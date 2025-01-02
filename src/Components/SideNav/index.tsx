import { Link } from "react-router-dom";
import { data } from "./data";

export const SideNav: React.FC = () => {
  return (
    <section className="left-sidebar">
      <nav>
        <ul>
          {data.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};
