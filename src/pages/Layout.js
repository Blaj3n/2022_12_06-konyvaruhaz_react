import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Publikus Könyváruház</Link>
          </li>
          <li>
            <Link to="/admin">Admin Felület</Link>
          </li>
        </ul>
      </nav>
      <article>
        <Outlet />
      </article>
    </>
  );
};

export default Layout;
