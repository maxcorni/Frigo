import Navigation from "../components/navigation/Navigation";
import Add from "../components/add/Add";

export default function AddPage() {
  return (
    <div className="frigo-container">
      <h2 className="add-title">Add Ingredients</h2>
      <Add />
      <Navigation />
    </div>
  );
}
