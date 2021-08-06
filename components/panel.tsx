import { Box } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { padding } from "../styles/theme";

export const Panel: FunctionComponent = ({ children }) => {
  return (
    <Box
      bg="white"
      borderTopRadius="25px"
      r={0}
      p={padding}
      mt={10}
      height="300px"
    >
      {children}
    </Box>
  );
};
