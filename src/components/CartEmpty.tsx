import React from "react";
import { Link } from "react-router-dom";
import cartEmptyImg from "../assets/img/empty-cart.png";

const CartEmpty = () => (
  <div className="cart cart--empty">
    <h2>
      Cart is empty <span>😕</span>
    </h2>
    <p>
      You didn't order pizza
      <br />
      To order pizza go to Main page :)
    </p>
    <img src={cartEmptyImg} alt="Empty cart" />
    <Link to="/" className="button button--black">
      <span>Back</span>
    </Link>
  </div>
);

export default CartEmpty;
