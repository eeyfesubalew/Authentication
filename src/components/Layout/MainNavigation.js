import { Link } from "react-router-dom";
import { useContext } from "react";
import classes from "./MainNavigation.module.css";
import AuthContext from "../../store/auth-context";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const isLoggeIn = authCtx.isLoggedIn;
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggeIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggeIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLoggeIn && (
            <li>
              <button>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
