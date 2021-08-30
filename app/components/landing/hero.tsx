import { Button, Box, Container, Heading, Link, Stack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

export const Hero = () => {
  return (
    <VStack minHeight="90vh">
      <Container maxW="5xl">
        <Stack textAlign="center" align="center" spacing={{ base: 8, md: 10 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight="110%"
            mb={10}
          >
            Track your{" "}
            <Text as="span" color="purple.400">
              mental weather
            </Text>
          </Heading>
          <Text maxW="3xl" fontSize={{ base: "xl", md: "2xl" }}>
            Never miss a meeting. Never be late for one too. Keep track of your meetings and receive
            smart reminders in appropriate times. Read your smart “Daily Agenda” every morning.
          </Text>

          <Stack spacing={6} direction="row" mb={100}>
            <Button as={Link} href="/api/auth/login" rounded="full" px={6} variant="primary">
              Get started
            </Button>{" "}
            <Button
              as={Link}
              href="/api/auth/login"
              rounded="full"
              px={6}
              colorScheme="orange"
              variant="secondary"
              _hover={{ bg: "orange.500" }}
            >
              Login
            </Button>
          </Stack>

          <Box height="300px" w="full" position="relative">
            <Image
              src="/mentali.png"
              layout="fill"
              objectFit="contain"
              quality={100}
              alt="Brand image"
            />
          </Box>
        </Stack>
      </Container>
    </VStack>
  );
};
