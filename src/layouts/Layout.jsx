import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav className="nav">
        <Link to="/">Main Page</Link>
        <Link to="/users">Users</Link>
        <Link to="/about">About Us</Link>
      </nav>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">© 2026</footer>
    </>
  );
}

export default Layout;