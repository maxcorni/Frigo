import { useNavigate } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import Icon from "../components/icon/Icon";
import { useFrigo } from "../context/FrigoContext";
import RecipeCardList from "../components/recipeList/RecipeCardList";

export default function RecipeListPage() {
    const navigate = useNavigate();
    const { filteredRecipes, favorites, toggleFavorite } = useFrigo();

    return (
        <div className="frigo-container">
            <button onClick={() => navigate(-1)} className="back-btn">
                <Icon name="arrow-left" size={24} color={"black"} />
            </button>
            <h2 className="recipe-list-title">Recettes suggérées</h2>
            <RecipeCardList recipes={filteredRecipes} favorites={favorites} toggleFavorite={toggleFavorite} />
            <Navigation />
        </div>
    );
}
