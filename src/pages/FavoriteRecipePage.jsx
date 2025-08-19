import {useNavigate } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import Icon from "../components/icon/Icon";
import { useFrigo } from "../context/FrigoContext";
import RecipeCardList from "../components/recipeList/RecipeCardList";

export default function FavoriteRecipePage() {
    const navigate = useNavigate();
    const { favorites, allRecipes, toggleFavorite } = useFrigo();
    const favoriteRecipes = allRecipes.filter(r => favorites.includes(r.id));

    return (
        <div className="frigo-container">
            <button onClick={() => navigate(-1)} className="back-btn">
                <Icon name="arrow-left" size={24} color={"black"} />
            </button>
            <h2 className="favorite-title">Mes recettes favorites</h2>
            <RecipeCardList recipes={favoriteRecipes} favorites={favorites} toggleFavorite={toggleFavorite} />
            <Navigation />
        </div>
    );
}
