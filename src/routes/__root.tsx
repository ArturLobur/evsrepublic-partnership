import {createRootRoute, Link, Outlet} from "@tanstack/react-router";
import {TanStackRouterDevtools} from "@tanstack/router-devtools";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const Route = createRootRoute({
  component: () => (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});