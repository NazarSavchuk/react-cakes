"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setSearchValue = exports.setCurrentPage = exports.setSort = exports.setCategoryId = exports.selectFilter = exports.selectSort = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  searchValue: "",
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: "popular",
    sortProperty: "rating"
  }
};
var filterSlice = (0, _toolkit.createSlice)({
  name: "filter",
  initialState: initialState,
  reducers: {
    setCategoryId: function setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSearchValue: function setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setSort: function setSort(state, action) {
      state.sort = action.payload;
    },
    setCurrentPage: function setCurrentPage(state, action) {
      state.currentPage = action.payload;
    }
  }
});

var selectSort = function selectSort(state) {
  return state.filter.sort;
};

exports.selectSort = selectSort;

var selectFilter = function selectFilter(state) {
  return state.filter;
};

exports.selectFilter = selectFilter;
var _filterSlice$actions = filterSlice.actions,
    setCategoryId = _filterSlice$actions.setCategoryId,
    setSort = _filterSlice$actions.setSort,
    setCurrentPage = _filterSlice$actions.setCurrentPage,
    setSearchValue = _filterSlice$actions.setSearchValue;
exports.setSearchValue = setSearchValue;
exports.setCurrentPage = setCurrentPage;
exports.setSort = setSort;
exports.setCategoryId = setCategoryId;
var _default = filterSlice.reducer;
exports["default"] = _default;