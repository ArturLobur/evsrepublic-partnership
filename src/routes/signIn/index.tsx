import {createFileRoute} from "@tanstack/react-router";

import SignInSide from "../../components/auth/SignIn.tsx";

export const Route = createFileRoute("/signIn/")({
  component: () => <SignInSide />,
});