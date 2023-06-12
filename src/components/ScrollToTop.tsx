import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useState } from "react";

export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    const eventListener = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", eventListener);

    return () => {
      window.removeEventListener("scroll", eventListener);
    };
  }, []);

  const goToTop = useCallback(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, []);

  return (
    <div className="top-to-btm">
      {showTopBtn && (
        <FontAwesomeIcon
          className="icon-position icon-style fa-2x"
          icon={faArrowUp}
          onClick={goToTop}
        />
      )}
    </div>
  );
};
