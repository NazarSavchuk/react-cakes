"use strict";
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("react-dom/client");
var App_tsx_1 = require("./App.tsx");
var react_router_dom_1 = require("react-router-dom");
var store_1 = require("./redux/store");
var react_redux_1 = require("react-redux");
var rootElem = document.getElementById("root");
if (rootElem) {
    var root = client_1["default"].createRoot(rootElem);
    root.render(react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(react_redux_1.Provider, { store: store_1.store },
            react_1["default"].createElement(App_tsx_1["default"], null))));
}
