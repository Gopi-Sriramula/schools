import { Link } from "react-router-dom";
import "./style.css";
function Header() {
  return (
    <div className="header">
      <h1 className="head">Schools</h1>
      <div className="links">
          <Link className="link" to="/">ShowSchools</Link>
          <Link className="link" to="/addSchool">AddSchool</Link>
      </div>
    </div>
  );
}

export default Header;
