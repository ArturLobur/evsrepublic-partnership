import {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import {Toaster} from "react-hot-toast";

import App from "./system/App.tsx";

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
      <Toaster />
    </StrictMode>,
  );
}