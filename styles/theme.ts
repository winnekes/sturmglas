import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: "lightgray",
      },
    }),
  },
});

export const width = ["100%", "100%", "100%", "container.lg"];
