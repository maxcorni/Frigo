import { Link } from "react-router-dom";

export default function IndexPage() {
    return (
        <div className="frigo-container">
            <h1>Empty Fridge</h1>
            <img src="images/frigo.png" />
            <p>
                The app that helps you <span className="bold">eat better</span> <br />
                by using your <span className="bold">leftovers</span> and <span className="bold">saving</span> <br />
                as much as possible!
            </p>
            <Link to="/add">
                <button className="primary-btn">Accéder à l'application</button>
            </Link>
        </div>
    );
}
