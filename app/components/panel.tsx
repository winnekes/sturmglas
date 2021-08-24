import { Box, ChakraComponent } from "@chakra-ui/react";
import { padding } from "../styles/theme";

export const Panel: ChakraComponent<"div", {}> = ({ children, ...props }) => {
  return (
    <Box
      bg="white"
      color="gray.900"
      borderTopRadius="25px"
      borderBottomRadius="25px"
      r={0}
      p={padding}
      {...props}
    >
      {children}
    </Box>
  );
};
