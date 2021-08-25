import { Center, Spinner } from "@chakra-ui/react";

export const Loading = () => {
  return (
    <Center>
      <Spinner speed="1s" size="xl" />
    </Center>
  );
};
