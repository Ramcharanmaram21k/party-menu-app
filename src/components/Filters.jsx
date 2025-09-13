

const Filters = (props) => {
        const {categories,
            activeCategory,
            onCategoryChange,
            searchTerm,
            onSearchChange,
            vegOnly,
            onVegOnlyChange} = props


    return (
        <div className="filters">
            <div className="tabs">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`tab ${cat === activeCategory ? "active" : ""}`}
                        onClick={() => onCategoryChange(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="controls">
                <input
                    type="text"
                    placeholder="Search dishes..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
                <label className="veg-toggle">
                    <input
                        type="checkbox"
                        checked={vegOnly}
                        onChange={(e) => onVegOnlyChange(e.target.checked)}
                    />
                    Veg Only
                </label>
            </div>
        </div>

    )
}

export default Filters;