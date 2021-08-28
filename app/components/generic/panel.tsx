import { Box, ChakraComponent } from "@chakra-ui/react";
import { spacing } from "../../styles/theme";

export const Panel: ChakraComponent<"div", {}> = ({ children, ...props }) => {
  return (
    <Box
      bg="gray.800"
      color="gray.100"
      borderTopRadius="25px"
      borderBottomRadius="25px"
      r={0}
      p={spacing}
      {...props}
    >
      {children}
    </Box>
  );
};
