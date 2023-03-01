import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <a href="https://wa.me/9442038894" className="whatsapp"><i class="bx bxl-whatsapp "></i></a>

      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
