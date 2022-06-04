import { createSlice } from '@reduxjs/toolkit';
import {
  TotalRevenue,
  OrdersDataArray,
  ProductsDataArray,
  StatisticsArray,
} from '../../../Utils/Constant';
const initialState = {
  totalRevenue: [...TotalRevenue],
  ordersDataArray: [...OrdersDataArray],
  productsDataArray: [...ProductsDataArray],
  statisticsArray: [...StatisticsArray],
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    updateOrder: (state, action) => {
      state.ordersDataArray = state.ordersDataArray.map((el) => {
        if (el.id === action.payload.id) {
          return { ...el, status: action.payload.status };
        } else return el;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateOrder } = adminSlice.actions;
export const adminState = (state) => state.admin;

export default adminSlice.reducer;
