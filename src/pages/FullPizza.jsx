import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function FullPizza() {
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://62abb2aabd0e5d29af143603.mockapi.io/react-pizza/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Axios get call error");
        navigate("/");
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return "Loading...";
  }
  return (
    <div>
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price}</h4>
    </div>
  );
}

export default FullPizza;
