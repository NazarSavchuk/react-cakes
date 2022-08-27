"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var empty_cart_png_1 = require("../assets/img/empty-cart.png");
var CartEmpty = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "cart cart--empty" },
            react_1["default"].createElement("h2", null,
                "Cart is empty ",
                react_1["default"].createElement("span", null, "\uD83D\uDE15")),
            react_1["default"].createElement("p", null,
                "You didn't order pizza",
                react_1["default"].createElement("br", null),
                "To order pizza go to Main page :)"),
            react_1["default"].createElement("img", { src: empty_cart_png_1["default"], alt: "Empty cart" }),
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/", className: "button button--black" },
                react_1["default"].createElement("span", null, "Back")))));
};
exports["default"] = CartEmpty;
