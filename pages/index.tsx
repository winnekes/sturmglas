import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import { ReactElement, useEffect } from "react";
import { IoLogoBitcoin } from "react-icons/io";
import { ComingSoonFeatures } from "../app/components/landing/coming-soon-features";
import { Hero } from "../app/components/landing/hero";
import { PAGES } from "../app/components/navigation/navigation";
import { PageWrapper } from "../app/components/generic/page-wrapper";

import {
  Button,
  Container,
  Text,
  Heading,
  Stack,
  VStack,
  Flex,
  Link,
  StackDivider,
  useColorModeValue,
  SimpleGrid,
  Image as ChakraImage,
  Icon,
} from "@chakra-ui/react";
import Image from "next/image";
import { Subtitle, Title } from "../app/components/generic/text/titles";

export default function Home() {
  // TODO landing page
  // TODO seo

  const { user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && user) {
      router.push(PAGES.oasis);
    }
  }, [user, isLoading]);

  if (user) {
    return null;
  }
  return (
    <PageWrapper hideNavigation showFooter>
      <Hero />

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform="uppercase"
            color="blue.400"
            fontWeight={600}
            fontSize="sm"
            p={2}
            alignSelf="flex-start"
            rounded="md"
          >
            Our Story
          </Text>
          <Heading>A digital Product design agency</Heading>
          <Text fontSize="lg">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore
          </Text>
          <Stack spacing={4} divider={<StackDivider />}>
            <Feature
              icon={<Icon as={IoLogoBitcoin} color="yellow.500" w={5} h={5} />}
              text="Business Planning"
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color="green.500" w={5} h={5} />}
              text="Financial Planning"
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color="purple.500" w={5} h={5} />}
              text="Market Analysis"
            />
          </Stack>
        </Stack>
        <Flex>
          <ChakraImage
            rounded="md"
            alt="feature image"
            src="https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            objectFit="cover"
          />
        </Flex>
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex>
          <ChakraImage
            rounded="md"
            alt="feature image"
            src="https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            objectFit="cover"
          />
        </Flex>
        <Stack spacing={4}>
          <Text
            textTransform="uppercase"
            color="blue.400"
            fontWeight={600}
            fontSize="sm"
            p={2}
            alignSelf="flex-start"
            rounded="md"
          >
            Our Story
          </Text>
          <Heading>A digital Product design agency</Heading>
          <Text fontSize="lg">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore
          </Text>
          <Stack spacing={4} divider={<StackDivider />}>
            <Feature
              icon={<Icon as={IoLogoBitcoin} color="yellow.500" w={5} h={5} />}
              text="Business Planning"
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color="green.500" w={5} h={5} />}
              text="Financial Planning"
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color="purple.500" w={5} h={5} />}
              text="Market Analysis"
            />
          </Stack>
        </Stack>
      </SimpleGrid>

      <ComingSoonFeatures />
    </PageWrapper>
  );
}

interface FeatureProps {
  text: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction="row" align="center">
      <Flex w={8} h={8} align="center" justify="center" rounded="full" bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};
