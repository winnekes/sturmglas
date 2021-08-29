import { Button, Container, Heading, Link, Stack, Text, VStack } from "@chakra-ui/react";

export const Hero = () => {
  return (
    <VStack>
      <Container maxW="5xl">
        <Stack textAlign="center" align="center" spacing={{ base: 8, md: 10 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight="110%"
          >
            Sharing your feelings{" "}
            <Text as="span" color="orange.400">
              made easy
            </Text>
          </Heading>
          <Text maxW="3xl">
            Never miss a meeting. Never be late for one too. Keep track of your meetings and receive
            smart reminders in appropriate times. Read your smart “Daily Agenda” every morning.
          </Text>
          <Stack spacing={6} direction="row">
            <Button
              as={Link}
              href="/api/auth/login"
              rounded="full"
              px={6}
              colorScheme="orange"
              bg="orange.400"
              _hover={{ bg: "orange.500" }}
            >
              Get started
            </Button>
          </Stack>
        </Stack>
      </Container>
    </VStack>
  );
};
