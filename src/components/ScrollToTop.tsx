import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Box, Fab, styled, useScrollTrigger } from "@mui/material";
import { type FC, useCallback } from "react";

const Container = styled(Box)(({ theme }) => ({
  bottom: 24,
  position: "fixed",
  right: 24,
  zIndex: theme.zIndex.fab
}));

export interface IScrollToTopProps {
  scrollCallback: () => void;
  scrollTrigger: boolean;
}
export const ScrollToTop: FC<IScrollToTopProps> = ({ scrollCallback, scrollTrigger }) => {
  return (
    <Container>
      {scrollTrigger && (
        <Fab aria-label="Scroll to top" color="primary" onClick={scrollCallback}>
          <ArrowUpwardIcon />
        </Fab>
      )}
    </Container>
  );
};

export interface IScrollToTopWrapperProps {
  scrollCallback: () => void;
  target?: HTMLDivElement | Window;
}

export const ScrollToTopWrapper: FC<IScrollToTopWrapperProps> = ({ scrollCallback, target }) => {
  const scrollTrigger = useScrollTrigger({ target, threshold: 400 });

  const goToTop = useCallback(() => {
    if (scrollCallback) {
      scrollCallback();
    } else {
      (target ?? window).scrollTo({
        behavior: "smooth",
        top: 0
      });
    }
  }, [scrollCallback, target]);

  return <ScrollToTop scrollCallback={goToTop} scrollTrigger={scrollTrigger} />;
};
