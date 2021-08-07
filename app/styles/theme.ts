import { extendTheme } from "@chakra-ui/react";

export const colors = {
  ui: {
    background01: "#759ab0",
    background02: "#6600AD",
  },
};

export const width = ["100%", "100%", "100%", "container.xl"];
export const padding = [4, 6];

export const theme = extendTheme({
  fonts: {
    body: "Nunito Sans",
    heading: "Nunito",
  },
  styles: {
    global: (props) => ({
      body: {
        bg: colors.ui.background01,
        // color: "white",
      },
    }),
  },
});
