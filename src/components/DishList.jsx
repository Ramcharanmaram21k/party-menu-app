import DishCard from './DishCard';


const DishList = (props) => {
    const {dishes,
        selectedDishes,
        onAddDish,
        onRemoveDish,
        onViewIngredients} = props;
    return (
        <div className="dish-list">
            {dishes.map(dish => (
                <DishCard
                    key={dish.id}
                    dish={dish}
                    isSelected={selectedDishes.includes(dish.id)}
                    onAddDish={onAddDish}
                    onRemoveDish={onRemoveDish}
                    onViewIngredients={onViewIngredients}
                />
            ))}
        </div>
    )
}
export default DishList;