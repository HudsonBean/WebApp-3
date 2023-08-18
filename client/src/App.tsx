import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={}>
      <BrowserRouter>
        <Routes>
          <Route path="" Component={} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
