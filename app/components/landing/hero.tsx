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
            Take control of your{" "}
            <Text as="span" color="purple.400">
              mental weather
            </Text>
          </Heading>
          <Text maxW="3xl" fontSize={{ base: "xl", md: "2xl" }}>
            Emotions and feelings are never easy. Sometimes it seems impossible to put into words
            what's going in your mind.
          </Text>

          <Stack spacing={6} direction="row" mb={100}>
            <Button
              as={Link}
              href="/api/auth/login"
              rounded="full"
              px={6}
              variant="primary"
              bg="#7fff7f"
            >
              Get started
            </Button>{" "}
            <Button as={Link} href="/api/auth/login" rounded="full" px={6} variant="secondary">
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
