import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage.jsx';
import AddPage from './pages/AddPage.jsx';
import RecipeListPage from './pages/RecipeListPage.jsx';
import FavoriteRecipePage from './pages/FavoriteRecipePage.jsx';
import RecipeDetailPage from './pages/RecipeDetailPage.jsx';
import { FrigoProvider } from './context/FrigoContext.jsx';

function App() {
  return (
    <FrigoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/recipe-list" element={<RecipeListPage />} />
          <Route path="/favorite-recipe" element={<FavoriteRecipePage />} />
          <Route path="/recipe-detail/:id" element={<RecipeDetailPage />} />
        </Routes>
      </BrowserRouter>
    </FrigoProvider>
  );
}

export default App;
