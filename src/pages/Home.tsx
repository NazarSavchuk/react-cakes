import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";
import { selectPizzaData } from "../redux/pizza/selectors";

import { useSelector } from "react-redux";
import { useAppDispatch } from "../redux/store";
import { fetchPizzas } from "../redux/pizza/asyncActions";
import { selectFilter } from "../redux/filter/selectors";
import { setCategoryId, setCurrentPage } from "../redux/filter/slice";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter);
  const { items, status } = useSelector(selectPizzaData);
  const sortType = sort.sortProperty;

  const onChangeCategory = (id: number) => {
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
          currentPage: String(currentPage),
        })
      );
    })();

    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  const pizzas = items
    .filter((obj: any) =>
      obj.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    .map((obj: any) => <PizzaBlock key={obj.id} {...obj} />);

  const skeletons = [...new Array(4)].map((_, index) => (
    <Skeleton key={index} />
  ));

  const onChangePage = React.useCallback((page: number) => {
    dispatch(setCurrentPage(page));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sort} />
      </div>
      <h2 className="content__title">All cakes</h2>
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
};

export default Home;
