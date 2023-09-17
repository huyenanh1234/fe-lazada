import React from "react";
import ReactDOM from "react-dom/client";
import {
    RouterProvider,
} from "react-router-dom";
import "./assets/scss/index.scss";
import router from './routes/router';
import { Provider } from "react-redux";
import store from "./app/store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
  </Provider>
)
