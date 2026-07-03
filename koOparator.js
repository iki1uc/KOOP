import { KOOP } from "../KOOP/koop.js";
import { NOOP } from "../NOOP/noop.js";
import { POOK } from "../POOK/pook.js";

export function koOparator(respo){
  if(respo === "RUN8" || respo === "TMP" || respo === "3hit90"){
    return KOOP;
  }

  if(respo === "dir" || respo === "WpiR" || respo === "MXU"){
    return NOOP;
  }

  if(respo === "CLONE" || respo === "FAIL" || respo === "9vec3tor"){
    return POOK;
  }

  return NOOP;
}
