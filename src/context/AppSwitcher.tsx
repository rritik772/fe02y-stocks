import { createContext, useContext, useState } from "react";
import {
  AppSwitcherModel,
  AppSwitcherModelDefault,
  Switches,
} from "../models/AppSwitcherModel";

export const AppSwitcher = createContext<AppSwitcherModel>(
  AppSwitcherModelDefault
);

export const UseAppSwitcher = () => useContext(AppSwitcher);

export const AppSwitcherProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [currentSwitch, setCurrentSwitch] = useState<Switches>(Switches.NSE);

  const value = {
    currentSwitch,
    setCurrentSwitch,
  };

  return <AppSwitcher.Provider value={value}>{children}</AppSwitcher.Provider>;
};
