import React from "react";

import { setCategoryId, setCurrentPage } from "../redux/slices/filterSlice";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";
import { fetchPizzas } from "../redux/slices/pizzaSlice";

import { useSelector, useDispatch } from "react-redux";
import { SearchContext } from "../App";

function Home() {
  const dispatch = useDispatch();
  const { categoryId, sort, currentPage } = useSelector(
    (state) => state.filter
  );
  const { items, status } = useSelector((state) => state.pizza);
  const sortType = sort.sortProperty;

  const { searchValue } = React.useContext(SearchContext);
  // const [items, setItems] = React.useState([]);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const order = sortType.includes("-") ? "asc" : "desc";
  const sortBy = sortType.replace("-", "");
  const category = categoryId > 0 ? `category=${categoryId}` : "";
  const search = searchValue ? `&search=${searchValue}` : "";

  React.useEffect(() => {
    const getPizzas = (async function () {
      dispatch(
        fetchPizzas({
          order,
          sortBy,
          category,
          search,
          currentPage,
        })
      );
    })();

    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  const pizzas = items
    .filter((obj) =>
      obj.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    .map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  const skeletons = [...new Array(4)].map((_, index) => (
    <Skeleton key={index} />
  ));

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">All pizzas</h2>
      {status === "error" ? (
        <div style={{ textAlign: "center", margin: "3rem" }}>
          <p style={{ fontSize: "2rem" }}>Pizzas load error :(</p>
          <p>try to reload later</p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : pizzas}
        </div>
      )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
}

export default Home;
