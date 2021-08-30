import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import { ReactElement, useEffect } from "react";
import { IoLogoBitcoin } from "react-icons/io";
import { ComingSoonFeatures } from "../app/components/landing/coming-soon-features";
import { Hero } from "../app/components/landing/hero";
import { PAGES } from "../app/components/navigation/navigation";
import { PageWrapper } from "../app/components/generic/page-wrapper";
import {
  Text,
  Heading,
  Stack,
  VStack,
  Flex,
  StackDivider,
  SimpleGrid,
  Image as ChakraImage,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Home() {
  const isMobile = useBreakpointValue({ base: true, lg: false });
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

      <Heading as="h2" textAlign="center">
        Features coming very soon
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} my="50px">
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
          <Stack spacing={4}>
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
      </>

      <SimpleGrid columns={{ base: 1, md: 2 }}>
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
          <Stack spacing={4}>
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

const Feature = ({ text, icon }: FeatureProps) => {
  return (
    <Stack direction="row" align="center">
      <Flex w={8} h={8} align="center" justify="center" rounded="full">
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};
