import CssBaseline from "@mui/material/CssBaseline";
import {ThemeProvider} from "@mui/material/styles";
import {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import {Toaster} from "react-hot-toast";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import DialogAlert from "./components/DialogAlert.tsx";
import SignupPage from "./pages/SignupPage.tsx";
import {DialogProvider} from "./store/DialogContext.tsx";
import App from "./system/App.tsx";
import {theme} from "./system/appTheme.ts";

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ThemeProvider theme={theme}>
        <DialogProvider>
          <CssBaseline />
          <Router>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/signup" element={<SignupPage />} />
            </Routes>
          </Router>
          <DialogAlert />
        </DialogProvider>
      </ThemeProvider>
      <Toaster />
    </StrictMode>,
  );
}