import { twMerge } from "tailwind-merge"

export default class Helpers {
  static mergeClass(classNames = "", classAttr = "") {
    return twMerge(classNames, classAttr)
  }
}
