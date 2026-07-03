import { KOOP } from "./koop.js";
import { NOOP } from "./noop.js";
import { POOK } from "./pook.js";

export function koOparator(respo){
  if(respo === "RUN8" || respo === "TMP" || respo === "3hit90"){
    return KOOP;   // aktives Verhalten
  }

  if(respo === "dir" || respo === "WpiR" || respo === "MXU"){
    return NOOP;   // enthält sich
  }

  if(respo === "CLONE" || respo === "FAIL" || respo === "9vec3tor"){
    return POOK;   // narrativ
  }

  return NOOP; // Default: Enthaltung
}

