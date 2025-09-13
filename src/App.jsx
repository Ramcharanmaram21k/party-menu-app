// src/App.jsx
import { useMemo, useState } from "react";
import "./App.css";
import { dishes as allDishes } from "./data/mockDishes";
import DishList from "./components/DishList";
import IngredientModal from "./components/IngredientModal";

const categories = ["ALL", "STARTER", "MAIN COURSE", "DESSERT", "SIDES"];

export default function App() {
    const [selectedCategory, setSelectedCategory] = useState("ALL");
    const [searchTerm, setSearchTerm] = useState("");
    const [vegOnly, setVegOnly] = useState(false);
    const [selectedDishes, setSelectedDishes] = useState([]);
    const [currentDish, setCurrentDish] = useState(null);

    const filteredDishes = useMemo(() => {
        let list = allDishes;
        if (selectedCategory !== "ALL") {
            list = list.filter(d => d.mealType === selectedCategory);
        }
        if (vegOnly) {
            list = list.filter(d => d.type === "VEG");
        }
        if (searchTerm.trim()) {
            const q = searchTerm.toLowerCase();
            list = list.filter(
                d =>
                    d.name.toLowerCase().includes(q) ||
                    d.description.toLowerCase().includes(q)
            );
        }
        return list;
    }, [selectedCategory, vegOnly, searchTerm]);

    const addDish = id =>
        setSelectedDishes(prev => (prev.includes(id) ? prev : [...prev, id]));

    const removeDish = id =>
        setSelectedDishes(prev => prev.filter(x => x !== id));

    return (
        <div className="app-root">
            <div className="header-row">
                <h1>Party Menu Selection</h1>
                <div className="selected-badge">Selected: {selectedDishes.length}</div>
            </div>
            <div className="card">
                <div className="tabs-row">
                    <div className="tabs">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`tab${selectedCategory === cat ? " active" : ""}`}
                                onClick={() => setSelectedCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <label className="veg-toggle">
                        <input
                            type="checkbox"
                            checked={vegOnly}
                            onChange={e => setVegOnly(e.target.checked)}
                        />
                        Veg Only
                    </label>
                </div>
                <div className="search-row">
                    <input
                        type="text"
                        placeholder="Search dishes..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        style={{ color: "#181818" }}
                    />
                </div>
                <DishList
                    dishes={filteredDishes}
                    selectedDishes={selectedDishes}
                    onAddDish={addDish}
                    onRemoveDish={removeDish}
                    onViewIngredients={setCurrentDish}
                />
                {currentDish && (
                    <IngredientModal
                        dish={currentDish}
                        onClose={() => setCurrentDish(null)}
                    />
                )}
            </div>
        </div>
    );
}
