// src/components/IngredientModal.js
export default function IngredientModal({ dish, onClose }) {
    if (!dish) return null;

    return (
        <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>{dish.name}</h2>
                    <button className="icon" aria-label="Close" onClick={onClose}>✕</button>
                </div>
                <p className="muted">{dish.description}</p>

                <h4>Ingredients</h4>
                <ul className="ingredients">
                    {dish.ingredients?.map((ing, idx) => (
                        <li key={idx}>
                            <span>{ing.name}</span>
                            <span className="qty">{ing.quantity}</span>
                        </li>
                    ))}
                </ul>

                <div className="modal-footer">
                    <button onClick={onClose} className="secondary">Close</button>
                </div>
            </div>
        </div>
    );
}
