import { atom } from "recoil";

export const alertModal = atom({
  key: "alertModalOn",
  default: false,
});

export const copyModalisFirst = atom({
  key: "copyModalisFirst",
  default: true,
});

export const copyModalState = atom({
  key: "copyModalState",
  default: false,
});
