import { BrowserRouter as Router } from "react-router-dom";
import { AppLayout } from "../../Layouts/AppLayout";
import { AppRoutes } from "../../routing/AppRoutes";
import { SettingsProvider } from "./SettingsProvider";
import { ThemeProvider } from "./ThemeProvider";

export const AppProvider = () => {
  return (
    <SettingsProvider>
      <ThemeProvider>
        <Router>
          <AppLayout>
            <AppRoutes />
          </AppLayout>
        </Router>
      </ThemeProvider>
    </SettingsProvider>
  );
};
