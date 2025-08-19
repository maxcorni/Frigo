import { Link } from "react-router-dom";
import "./navigation.css";
import Icon from "../icon/Icon";

export default function Navigation() {
  const currentPath = location.pathname;
  return (
    <ul className="navigation">
      <li>
        <Link to="/add">
          <button className="icon-btn">
            <Icon name="home" size={24} color={currentPath === "/add" ? "rgba(255, 89, 0, 1)" : "white"} />
          </button>
        </Link>
      </li>
      <li>
        <Link to="/recipe-list">
          <button className="icon-btn">
            <Icon name="list-bullets" size={24} color={currentPath === "/recipe-list" ? "rgba(255, 89, 0, 1)" : "white"} />
          </button>
        </Link>
      </li>
      <li>
        <Link to="/favorite-recipe">
          <button className="icon-btn">
            <Icon name="book" size={24} color={currentPath === "/favorite-recipe" ? "rgba(255, 89, 0, 1)" : "white"} />
          </button>
        </Link>
      </li>
    </ul>
  );
}
