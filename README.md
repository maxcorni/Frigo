# Frigo

Application web React pour gérer les ingrédients de votre frigo et trouver des recettes adaptées.

## Fonctionnalités
- Ajout et suppression d'ingrédients présents dans le frigo
- Filtrage des recettes selon les ingrédients sélectionnés
- Consultation du détail d'une recette
- Ajout et gestion des recettes favorites (persistées en localStorage)
- Autocomplétion des ingrédients à partir des recettes
- Navigation fluide entre les pages (SPA avec React Router)
- Design moderne et responsive

## Pages principales
- **Index** : Page d'accueil avec CTA vers la Home
- **Home** : Choix rapide entre ajout d'ingrédients, liste de recettes, favoris
- **Add** : Ajout d'ingrédients avec autocomplétion
- **Recipe List** : Liste des recettes filtrées selon les ingrédients
- **Favorite Recipe** : Liste des recettes favorites
- **Recipe Detail** : Détail complet d'une recette

## Structure du projet
```
frigo/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── add/
│   │   ├── navigation/
│   │   ├── recipeList/
│   ├── context/
│   │   ├── FrigoContext
│   ├── pages/
│   │   ├── AddPage
│   │   ├── FavoriteRecipePage
│   │   ├── IndexPage
│   │   ├── RecipeDetailPage
│   │   ├── RecipeListPage
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
├── vite.config.js
├── README.md
```

## Installation

1. Cloner le dépôt :
   ```sh
   git clone https://github.com/maxcorni/frigo.git
   ```
2. Installer les dépendances :
   ```sh
   npm install
   ```
3. Lancer le serveur de développement :
   ```sh
   npm run dev
   ```

## Technologies
- React
- React Router
- Context API
- Vite
- CSS Modules

## Auteur

- **Maxime Cornillon** - [MaximeCornillon](https://github.com/maxcorni)

## 📄 Licence
Projet réalisé dans le cadre pédagogique de **Webecom 2025**. Non destiné à un usage commercial.

