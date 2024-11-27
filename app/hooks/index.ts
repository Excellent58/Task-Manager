import { useEffect } from "react";

function useDisableBodyScroll(isOpen: boolean) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup when the component is unmounted or isOpen changes
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);
}

export default useDisableBodyScroll;