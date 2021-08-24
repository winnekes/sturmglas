import { extendTheme } from "@chakra-ui/react";

export const colors = {
  ui: {
    background01: "#97cbde",
    background02: "#1A4551",
  },
  text01: "#8c8c8c",
  text02: "#a2a2a2",
  brand01: "#25a69e",
};

export const width = ["100%", "container.xl"];
export const padding = [4, 6];

export const theme = extendTheme({
  fonts: {
    body: "Raleway",
    heading: "Nunito",
  },
  components: {
    Heading: {
      baseStyle: {
        color: colors.text01,
        marginBottom: 6,
      },
    },
    Text: {
      baseStyle: {
        // color: colors.text02,
        //F marginBottom: 4,
      },
    },
  },
  styles: {
    global: props => ({
      body: {
        bgGradient: `radial(${colors.ui.background01}, ${colors.ui.background02})`,
        color: "white",
      },
    }),
  },
});
