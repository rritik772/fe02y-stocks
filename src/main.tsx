import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { AppShell, MantineProvider } from "@mantine/core";
import HeaderComponent from "./components/header/HeaderComponent";
import GlobalCss from "./global";
import { NseContextProvider } from "./context/nse";
import { AppSwitcherProvider } from "./context/AppSwitcher";
import { ListContextProvider } from "./context/ListContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "light",
        defaultRadius: "md",
      }}
    >
      <GlobalCss />
      <AppSwitcherProvider>
        <ListContextProvider>
          <AppShell header={<HeaderComponent />}>
            <NseContextProvider>
              <App />
            </NseContextProvider>
          </AppShell>
        </ListContextProvider>
      </AppSwitcherProvider>
    </MantineProvider>
  </React.StrictMode>
);
