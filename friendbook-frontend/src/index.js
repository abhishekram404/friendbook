import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import axios from "axios";
import { QueryClientProvider, QueryClient } from "react-query";
const isProduction = process.env.REACT_APP_NODE_ENV === "production";

axios.defaults.baseURL = isProduction
  ? "https://friendbook-mern.herokuapp.com/api/"
  : "http://localhost:4000/api/";
axios.defaults.withCredentials = true;

const queryClient = new QueryClient();
ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
