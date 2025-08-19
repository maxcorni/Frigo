import { Link } from "react-router-dom";
import "./navigation.css";
import Icon from "../icon/Icon";
import { useFrigo } from "../../context/FrigoContext";


export default function Navigation() {
  const currentPath = location.pathname;
  const { favorites} = useFrigo();
  
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
            <span className="fav-count">{favorites.length}</span>
          </button>
        </Link>
      </li>
    </ul>
  );
}
