import {createFileRoute} from "@tanstack/react-router";

import SignInSide from "../../components/SignIn.tsx";

export const Route = createFileRoute("/signIn/")({
  component: () => <SignInSide />,
});