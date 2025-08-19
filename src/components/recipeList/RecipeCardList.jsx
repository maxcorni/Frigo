import { Link } from "react-router-dom";
import Icon from "../icon/Icon";
import "./recipe-card-list.css";

export default function RecipeCardList({ recipes, favorites, toggleFavorite }) {
  if (!recipes || recipes.length === 0) {
    return <p className="no-recipes">Aucune recette trouvée.</p>;
  }
  return (
    <div className="recipe-card-list-grid">
      {recipes.map((r) => (
        <div key={r.id} className="recipe-card-list-card">
          <Link to={`/recipe-detail/${r.id}`} className="recipe-card-list-link">
            <div className="recipe-card-list-img-container">
              <img src={r.image} alt={r.name} className="recipe-card-list-img" />
            </div>
            <div className="recipe-card-list-title">{r.name}</div>
          </Link>
          <button onClick={() => toggleFavorite(r.id)} className="recipe-card-list-fav-btn" title={favorites.includes(r.id) ? "Retirer des favoris" : "Ajouter aux favoris"}>
            <Icon name="bookmark-fill" size={20} color={favorites.includes(r.id) ? "rgba(255, 89, 0, 1)" : "#000000ff"} />
          </button>
        </div>
      ))}
    </div>
  );
}
