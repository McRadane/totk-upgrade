import { useState, useEffect, useCallback } from "react";

export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="top-to-btm">
      {showTopBtn && (
        <i
          className="icon-position icon-style fas fa-arrow-up fa-2x"
          onClick={goToTop}
        />
      )}
    </div>
  );
};
