import { atom } from "recoil";

export const depthState = atom({
  key: "depthState",
  default: 1,
});

export const choiceListState = atom({
  key: "choiceListState",
  default: [] as string[],
});

export const roleState = atom({
  key: "roleState",
  default: 0,
});

export const toState = atom({
  key: "toState",
  default: -1,
});
