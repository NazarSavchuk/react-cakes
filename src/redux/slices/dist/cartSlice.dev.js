"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.clearItems = exports.minusItem = exports.removeItem = exports.addItem = exports.selectCartItemById = exports.selectCart = void 0;

var _toolkit = require("@reduxjs/toolkit");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  totalPrice: 0,
  items: []
};
var cartSlice = (0, _toolkit.createSlice)({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem: function addItem(state, action) {
      var findItem = state.items.find(function (obj) {
        return obj.id === action.payload.id;
      });

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push(_objectSpread({}, action.payload, {
          count: 1
        }));
      }

      state.totalPrice = state.items.reduce(function (sum, obj) {
        return obj.price * obj.count + sum;
      }, 0);
    },
    minusItem: function minusItem(state, action) {
      var findItem = state.items.find(function (obj) {
        return obj.id === action.payload;
      });

      if (findItem) {
        findItem.count--;
      }
    },
    removeItem: function removeItem(state, action) {
      state.items = state.items.filter(function (obj) {
        return obj.id !== action.payload;
      });
    },
    clearItems: function clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    }
  }
});

var selectCart = function selectCart(state) {
  return state.cart;
};

exports.selectCart = selectCart;

var selectCartItemById = function selectCartItemById(id) {
  return function (state) {
    return state.cart.items.find(function (obj) {
      return obj.id === id;
    });
  };
};

exports.selectCartItemById = selectCartItemById;
var _cartSlice$actions = cartSlice.actions,
    addItem = _cartSlice$actions.addItem,
    removeItem = _cartSlice$actions.removeItem,
    minusItem = _cartSlice$actions.minusItem,
    clearItems = _cartSlice$actions.clearItems;
exports.clearItems = clearItems;
exports.minusItem = minusItem;
exports.removeItem = removeItem;
exports.addItem = addItem;
var _default = cartSlice.reducer;
exports["default"] = _default;