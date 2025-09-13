
const DishCard = (props) => {
        const {dish,
            onAddDish,
            onRemoveDish,
            isSelected,
            onViewIngredients} = props
    return (
        <div className="dish-card">
            <img src={dish.image} alt={dish.name} className="dish-image" />
            <div className="dish-body">
                <h3>{dish.name}</h3>
                <p className="muted">
                    {dish.mealType} • {dish.type}
                </p>
                <p>{dish.description}</p>
            </div>
            <div className="dish-actions">
                {!isSelected ? (
                    <button className="primary" onClick={() => onAddDish(dish.id)}>
                        Add
                    </button>
                ) : (
                    <button className="danger" onClick={() => onRemoveDish(dish.id)}>
                        Remove
                    </button>
                )}
                <button onClick={() => onViewIngredients(dish)}>Ingredients</button>
            </div>
        </div>
    )
}

export default DishCard;
