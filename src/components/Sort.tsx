import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectSort, setSort } from "../redux/slices/filterSlice";

function Sort() {
  const dispatch = useDispatch();
  const sort = useSelector(selectSort);

  const sortRef = React.useRef<HTMLDivElement>(null);

  const [isVisiblePopup, setIsVisiblePopup] = React.useState(false);

  React.useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (!event.path.includes(sortRef.current)) {
        setIsVisiblePopup(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  type SortItem = {
    name: string;
    sortProperty: string;
  };

  const list: SortItem[] = [
    { name: "popular (DESC)", sortProperty: "rating" },
    { name: "popular (ASC)", sortProperty: "-rating" },
    {
      name: "price (DESC)",
      sortProperty: "price",
    },
    {
      name: "price (ASC)",
      sortProperty: "-price",
    },
    {
      name: "title (DESC)",
      sortProperty: "title",
    },
    {
      name: "title (ASC)",
      sortProperty: "-title",
    },
  ];

  function onClickListHide(obj: SortItem) {
    dispatch(setSort(obj));
    setIsVisiblePopup(false);
  }

  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Sort by: </b>
        <span onClick={() => setIsVisiblePopup(!isVisiblePopup)}>
          {sort.name}
        </span>
      </div>
      {isVisiblePopup && (
        <div className="sort__popup">
          <ul>
            {list.map((obj, i) => (
              <li
                className={
                  sort.sortProperty === obj.sortProperty ? "active" : ""
                }
                key={i}
                onClick={() => onClickListHide(obj)}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default Sort;
