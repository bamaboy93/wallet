import { createAction } from "@reduxjs/toolkit";
import types from "./categoriesActionTypes";

export const getCategoriesRequest = createAction(types.CATEGORIES_GET_REQUEST);
export const getCategoriesSuccess = createAction(types.CATEGORIES_GET_SUCCESS);
export const getCategoriesError = createAction(types.CATEGORIES_GET_ERROR);
