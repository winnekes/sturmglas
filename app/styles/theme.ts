import { extendTheme } from "@chakra-ui/react";

export const colors = {
  ui: {
    background01: "#f6e8f3",
    background02: "#d196d5",
  },
  text01: "#8c8c8c",
  text02: "#a2a2a2",
};

export const width = ["100%", "100%", "100%", "container.xl"];
export const padding = [4, 6];

export const theme = extendTheme({
  fonts: {
    body: "Nunito Sans",
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
        color: colors.text02,
        marginBottom: 4,
      },
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: colors.ui.background01,
      },
    }),
  },
});
