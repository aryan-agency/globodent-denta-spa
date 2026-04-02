import { useState, useEffect } from "react";

const useScrollSpy = (sectionIds: string[], offset = 100) => {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + offset;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveId(sectionIds[i]);
          return;
        }
      }
      setActiveId(sectionIds[0]);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [sectionIds, offset]);

  return activeId;
};

export default useScrollSpy;
