import { Link } from "react-router-dom";

export const SideNav: React.FC = () => {
  return (
    <section className="left-sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/user">User</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/employees">Employees</Link>
          </li>
          <li>
            <Link to="/digital-clock">Digital Clock</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/hocusers">HOC Users</Link>
          </li>
          <li>
            <Link to="/hocemployess">HOC Employess</Link>
          </li>
          <li>
            <Link to="/error">Error</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/Compound">Compound</Link>
          </li>
          <li>
            <Link to="/customhook">Custom Hook</Link>
            </li>
            <li>
            <Link to="/renderprops">Render Props</Link>
            </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};
