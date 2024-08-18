import { useEffect } from "react";

export function useKey(callBack, keyName) {
  useEffect(
    function () {
      function func(e) {
        if (e.code.toLowerCase() === keyName.toLowerCase()) {
          callBack?.();
        }
      }
      document.addEventListener("keydown", func);
      return function () {
        return document.removeEventListener("keydown", func);
      };
    },
    [keyName, callBack]
  );
}
