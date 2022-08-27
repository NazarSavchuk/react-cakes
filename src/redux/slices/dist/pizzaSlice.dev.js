"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.selectPizzaData = exports.setItems = exports.fetchPizzas = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _axios = _interopRequireDefault(require("axios"));

var _extraReducers;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fetchPizzas = (0, _toolkit.createAsyncThunk)("pizza/fetchPizzasStatus", function _callee(params, thunkAPI) {
  var order, sortBy, category, search, currentPage, _ref, data;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          order = params.order, sortBy = params.sortBy, category = params.category, search = params.search, currentPage = params.currentPage;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("https://62abb2aabd0e5d29af143603.mockapi.io/react-pizza?&page=".concat(currentPage, "&limit=4&").concat(category, "$&sortBy=").concat(sortBy, "&order=").concat(order).concat(search)));

        case 3:
          _ref = _context.sent;
          data = _ref.data;
          return _context.abrupt("return", data);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.fetchPizzas = fetchPizzas;
var initialState = {
  items: [],
  status: "loading" //loading | success | error

};
var pizzaSlice = (0, _toolkit.createSlice)({
  name: "pizza",
  initialState: initialState,
  reducers: {
    setItems: function setItems(state, action) {
      state.items = action.payload;
    }
  },
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, fetchPizzas.pending, function (state) {
    state.status = "loading";
    state.items = [];
  }), _defineProperty(_extraReducers, fetchPizzas.fulfilled, function (state, action) {
    state.items = action.payload;
    state.status = "success";
  }), _defineProperty(_extraReducers, fetchPizzas.rejected, function (state) {
    state.status = "error";
    state.items = [];
  }), _extraReducers)
});
var setItems = pizzaSlice.actions.setItems;
exports.setItems = setItems;

var selectPizzaData = function selectPizzaData(state) {
  return state.pizza;
};

exports.selectPizzaData = selectPizzaData;
var _default = pizzaSlice.reducer;
exports["default"] = _default;