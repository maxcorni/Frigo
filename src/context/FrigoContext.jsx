import { createContext, useContext, useState, useEffect } from "react";
import recipesData from "../assets/recettes_cuisine.json";

const FrigoContext = createContext();

export function useFrigo() {
    return useContext(FrigoContext);
}


const RECIPES = recipesData.map(r => ({
    id: r.id,
    name: r.nom,
    ingredients: r.ingredients.map(i => i.nom.toLowerCase()),
    description: r.etapes.join("\n"),
    image: r.image,
    temps_preparation: r.temps_preparation,
    temps_cuisson: r.temps_cuisson,
    nombre_personnes: r.nombre_personnes,
    raw: r // pour accès complet si besoin

}));


// Liste des ingrédients uniques (en minuscules)
const ingredientsDisponibles = Array.from(
    new Set(
        recipesData.flatMap(r => r.ingredients.map(i => i.nom.toLowerCase()))
    )
).sort();

// Map nom d'ingrédient => illustration
const ingredientsIllustrations = {};
recipesData.forEach(r => {
    r.ingredients.forEach(i => {
        ingredientsIllustrations[i.nom.toLowerCase()] = i.illustration;
    });
});

export function FrigoProvider({ children }) {
    
    const [ingredients, setIngredients] = useState(() => {
        const saved = localStorage.getItem("frigo-ingredients");
        return saved ? JSON.parse(saved) : [];
    });
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem("frigo-favorites");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("frigo-favorites", JSON.stringify(favorites));
    }, [favorites]);

    useEffect(() => {
        localStorage.setItem("frigo-ingredients", JSON.stringify(ingredients));
    }, [ingredients]);

    // Filtrer les recettes selon les ingrédients (au moins un)
    const filteredRecipes = ingredients.length === 0
        ? RECIPES
        : RECIPES.filter(r => ingredients.some(i => r.ingredients.includes(i)));


    // Ajouter un ingrédient (évite les doublons)
    function addIngredient(ingredient) {
        setIngredients(prev => prev.includes(ingredient) ? prev : [...prev, ingredient]);
    }

    // Supprimer un ingrédient
    function removeIngredient(ingredient) {
        setIngredients(prev => prev.filter(i => i !== ingredient));
    }

    // Ajouter/retirer une recette des favoris
    function toggleFavorite(recipeId) {
        setFavorites(prev =>
            prev.includes(recipeId)
                ? prev.filter(id => id !== recipeId)
                : [...prev, recipeId]
        );
    }

    // Consulter le détail d'une recette
    function getRecipeDetail(recipeId) {
        return RECIPES.find(r => r.id === recipeId);
    }

    return (
        <FrigoContext.Provider value={{
            ingredients,
            addIngredient,
            removeIngredient,
            filteredRecipes,
            favorites,
            toggleFavorite,
            getRecipeDetail,
            allRecipes: RECIPES,
            ingredientsDisponibles,
            ingredientsIllustrations
        }}>
            {children}
        </FrigoContext.Provider>
    );
}
