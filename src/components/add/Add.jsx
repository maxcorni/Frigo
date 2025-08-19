import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFrigo } from "../../context/FrigoContext";
import "./add.css"; 

export default function Add() {
	const [input, setInput] = useState("");
	const navigate = useNavigate();
	const { ingredients, addIngredient, removeIngredient, ingredientsDisponibles, ingredientsIllustrations } = useFrigo();

	function handleAdd() {
		const value = input.trim().toLowerCase();
		if (
			value &&
			!ingredients.includes(value) &&
			ingredientsDisponibles.includes(value)
		) {
			addIngredient(value);
			setInput("");
		}
	}

	function handleRemove(ingredient) {
		removeIngredient(ingredient);
	}

	function handleGo() {
		navigate("/recipe-list");
	}

	return (
		<div className="add-ingredient-container">
			<input
				type="text"
				value={input}
				onChange={e => setInput(e.target.value)}
				placeholder="Ajouter un ingrédient..."
				className="add-ingredient-input"
				list="ingredients-list"
			/>
			<datalist id="ingredients-list">
				{ingredientsDisponibles.map((ing, idx) => (
					<option key={idx} value={ing} />
				))}
			</datalist>
			<button className="primary-btn add-ingredient-btn" onClick={handleAdd} disabled={!ingredientsDisponibles.includes(input.trim().toLowerCase())}>Add Ingredients</button>
					<ul className="add-ingredient-list">
						<li style={{ fontWeight: "bold", textAlign: "left", marginBottom: "16px" }}>In my fridge there a some : </li>
						{ingredients.map((ingredient, idx) => (
							<li key={idx} className="add-ingredient-item">
								<span>{ingredientsIllustrations[ingredient] || ""} {ingredient}</span>
								<button className="add-ingredient-remove" onClick={() => handleRemove(ingredient)}>×</button>
							</li>
						))}
					</ul>
			<button className="primary-btn add-ingredient-go" onClick={handleGo} disabled={ingredients.length === 0}>Go</button>
		</div>
		);
    }