import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AppProvider } from "./Context/index.tsx";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import store from "./store/index.ts";
import { Theme } from "./Fluent/Theme/index.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme>
    <BrowserRouter>
      <AppProvider>
        <Provider store={store}>
        <App />
        </Provider>
      </AppProvider>
    </BrowserRouter>
    </Theme>
  </StrictMode>
);
