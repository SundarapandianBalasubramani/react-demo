import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./Components/Context/index.tsx";
import { Provider } from "react-redux";
import store from "./store/index.ts";
import "bootstrap/dist/css/bootstrap.min.css";

import { Theme } from "./Fluent/Theme/index.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme>
      <BrowserRouter>
        <Provider store={store}>
          <AppProvider>
            <App />
          </AppProvider>
        </Provider>
      </BrowserRouter>
    </Theme>
  </StrictMode>
);
