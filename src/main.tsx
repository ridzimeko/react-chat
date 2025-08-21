import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.tsx";
import { BrowserRouter } from "react-router";
import Views from "./components/Views.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <Views />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
