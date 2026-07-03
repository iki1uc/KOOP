import { ID_KOOP } from "../ID/IDkoop.js";
import { ID_NEUTRAL } from "../ID/IDneutral.js";
import { ID_POOK } from "../ID/IDpook.js";

export function IDselector(respo){
  if(respo === "ANKER") return ID_NEUTRAL;

  if(["RUN8","TMP","3hit90"].includes(respo)) return ID_KOOP;

  if(["CLONE","FAIL","9vec3tor"].includes(respo)) return ID_POOK;

  return ID_NEUTRAL;
}
