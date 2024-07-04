import {createFileRoute} from "@tanstack/react-router";

export const Route = createFileRoute("/signIn/")({
  component: () => <div>Hello /signIn/!</div>,
});