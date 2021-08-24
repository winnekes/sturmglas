import { extendTheme } from "@chakra-ui/react";

export const colors = {
  ui: {
    background01: "#9a2d67",
    background02: "#21034e",
    background03: "gray.900",
  },
  text01: "#d9d9d9",
  text02: "#dcdcdc",
  brand01: "#bb2a88",
};

export const width = ["100%", "container.lg"];
export const spacing = [4, 10];

export const theme = extendTheme({
  fonts: {
    body: "Raleway",
    // heading: "Nunito",
  },
  components: {
    Heading: {
      baseStyle: {
        color: colors.text01,
      },
    },
    Text: {
      baseStyle: {
        color: colors.text02,
        //F marginBottom: 4,
      },
    },
    Divider: {
      baseStyle: {
        borderColor: "gray.700",
      },
    },
  },
  styles: {
    global: props => ({
      body: {
        bgGradient: `radial(${colors.ui.background01}, ${colors.ui.background02})`,
        backgroundAttachment: "fixed",
        color: "gray.100",
      },
    }),
  },
});
