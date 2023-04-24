import { Dispatch, SetStateAction } from "react"

export const enum Switches {
  NSE = 1,
  TrdParty,
  Playground
}

export interface AppSwitcherModel {
  currentSwitch: Switches,
  setCurrentSwitch: Dispatch<SetStateAction<Switches>>
}

export const AppSwitcherModelDefault: AppSwitcherModel = {
  currentSwitch: Switches.NSE,
  setCurrentSwitch: () => {},
}
