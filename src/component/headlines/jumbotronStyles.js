import styled from "styled-components";

import { JATOTheme } from "@jato/ui-component-library";

export const StyledJumbotron = styled.div(
  {
    display: "flex",
    marginTop: "18px",
    width: "100%",
    paddingBottom: JATOTheme.space[6],
    alignItems: "flex-end",
    backgroundColor: JATOTheme.colors.grey,
    backgroundSize: "cover",
    backgroundPosition: "center",

    "* > ": {
      width: "100%",
    },

    [`@media (min-width: ${JATOTheme.breakpoints[0]}px)`]: {
      paddingBottom: JATOTheme.space[6],
    },
  },
  ({ minHeight }) => ({
    minHeight,
    "&::after": {
      content: '""',
      display: "block",
      minHeight: "inherit",
      fontSize: 0,
    },
  }),
  ({ background }) => {
    let images;
    if (background && Array.isArray(background)) {
      const backgroundImages = background.reverse();

      images = backgroundImages.map((img) => {
        const isMobile = img.breakpoint < JATOTheme.breakpoints[3];
        return isMobile
          ? {
              [`@media (max-width: ${img.breakpoint}px)`]: {
                backgroundImage: `url(${img.url})`,
              },
            }
          : {
              [`@media (max-width: ${img.breakpoint}px)`]: {
                backgroundImage: `url(${img.url})`,
              },
              [`@media (min-width: ${img.breakpoint}px)`]: {
                backgroundImage: `url(${img.url})`,
              },
            };
      });
    } else {
      images = { backgroundImage: `url(${background})` };
    }
    return images;
  }
);

export const StyledJumbotronInner = styled.div({
  width: "100%",
});
