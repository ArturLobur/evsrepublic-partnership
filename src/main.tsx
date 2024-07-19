import {createRouter, RouterProvider} from "@tanstack/react-router";
import {StrictMode} from "react";
import ReactDOM from "react-dom/client";

import {AuthProvider} from "./contexts/authContext";
import {routeTree} from "./routeTree.gen";

const router = createRouter({routeTree});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </StrictMode>,
  );
}