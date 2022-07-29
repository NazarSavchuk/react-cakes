import React from "react";

function Categories({ value, onChangeCategory }) {
  const categories = ["All", "Meat", "Vegan", "Grill", "Hot", "Closed"];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li
            key={i}
            className={value === i ? "active" : ""}
            onClick={() => onChangeCategory(i)}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
