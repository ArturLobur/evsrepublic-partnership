import {createFileRoute} from "@tanstack/react-router";

import SignInSide from "../../components/Auth/SignIn.tsx";

export const Route = createFileRoute("/signIn/")({
  component: () => <SignInSide />,
});