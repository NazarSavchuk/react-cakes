import React from "react";

type CategoriesProps = {
  value: number;
  onChangeCategory: (i: number) => void;
};

const categories = ["All", "#SugarFree", "Vegan", "Fruity", "Bisquit", "Best"];

const Categories: React.FC<CategoriesProps> = React.memo(
  ({ value, onChangeCategory }) => {
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
);

export default Categories;
