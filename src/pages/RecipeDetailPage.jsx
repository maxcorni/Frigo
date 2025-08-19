import { useParams, useNavigate } from "react-router-dom";
import Icon from "../components/icon/Icon";
import { useFrigo } from "../context/FrigoContext";
import "./detail.css";

export default function RecipeDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getRecipeDetail, favorites, toggleFavorite } = useFrigo();
    const recipe = getRecipeDetail(Number(id));

    if (!recipe) {
        return <div className="frigo-container">Recette inconnue</div>;
    }

    return (
        <div className="frigo-detail-container">
            <div className="detail-header">
                <button onClick={() => navigate(-1)} className="detail-back">
                    <Icon name="arrow-left" size={24} color="black" />
                </button>
                <div className="detail-title-block">
                    <h1 className="detail-title">{recipe.name}</h1>
                </div>
            </div>
            <div className="detail-image-container">
                <img src={recipe.image} alt={recipe.name} className="detail-img" />
                <div className="detail-meta">
                    <div className="detail-meta">
                        <span><Icon name="clock" size={16} /> {recipe.temps_preparation}</span>
                        <span><Icon name="user" size={16} /> {recipe.nombre_personnes} persons</span>
                        <span><Icon name="spinner" size={16} /> {recipe.temps_cuisson}</span>
                    </div>
                    <button onClick={() => toggleFavorite(recipe.id)} className="detail-fav-btn">
                        <Icon name="bookmark-fill" size={20} color={favorites.includes(recipe.id) ? "rgba(255, 89, 0, 1)" : "#000000ff"} />
                        <span className="detail-fav-text"
                            style={{ color: favorites.includes(recipe.id) ? "rgba(255, 89, 0, 1)" : "#000000ff" }}
                        > add to favorites </span>
                    </button>
                </div>
            </div>

            <div className="detail-section">
                <h2 className="detail-section-title">Ingredients</h2>
                <div className="detail-card">
                    <ul className="detail-ingredients-list">
                        {recipe.raw.ingredients.map((i, idx) => (
                            <li key={idx} className="detail-ingredient-item">
                                <span className="detail-ingredient-emoji">{i.illustration}</span>
                                <span className="detail-ingredient-text">{i.quantite} {i.unite} {i.nom}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="detail-section">
                <h2 className="detail-section-title">Steps</h2>
                <div className="detail-card">
                    <ul className="detail-steps-list">
                        {recipe.raw.etapes.map((etape, idx) => (
                            <li key={idx} className="detail-step-item">{etape}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
