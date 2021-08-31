import {
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { IoLogoBitcoin } from "react-icons/io";

export const Features = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  return (
    <>
      <Heading as="h2" textAlign="center" mb={100}>
        Features
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb="100px">
        <Stack spacing={4} order={isMobile ? 1 : 0}>
          <Text
            textTransform="uppercase"
            color="purple.400"
            fontWeight={600}
            fontSize="sm"
            p={2}
            alignSelf="flex-start"
            rounded="md"
          >
            Companion
          </Text>
          <Heading>Say Hello to your Companion</Heading>
          <Text fontSize="lg">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore
          </Text>
        </Stack>
        <Flex justify="center">
          <Image src="/landing/companion_octo.jpg" alt=" " borderRadius="25px" />
        </Flex>
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} my="100px">
        <Flex justify="center">
          <Image src="/landing/timeline.png" alt=" " borderRadius="25px" />
        </Flex>
        <Stack spacing={4}>
          <Text
            textTransform="uppercase"
            color="purple.400"
            fontWeight={600}
            fontSize="sm"
            p={2}
            alignSelf="flex-start"
            rounded="md"
          >
            Mood timeline
          </Text>
          <Heading>Mood timeline</Heading>
          <Text fontSize="lg">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore
          </Text>
          <Stack spacing={4}></Stack>
        </Stack>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb="100px">
        <Stack spacing={4} order={isMobile ? 1 : 0}>
          <Text
            textTransform="uppercase"
            color="purple.400"
            fontWeight={600}
            fontSize="sm"
            p={2}
            alignSelf="flex-start"
            rounded="md"
          >
            Insights
          </Text>
          <Heading>Insights</Heading>
          <Text fontSize="lg">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore
          </Text>
        </Stack>
        <Flex justify="center">
          <Image src="/landing/insights.png" alt=" " borderRadius="25px" />
        </Flex>
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} my="100px">
        <Flex justify="center">
          <Image src="/landing/share-mood.png" alt=" " borderRadius="25px" />
        </Flex>
        <Stack spacing={4}>
          <Text
            textTransform="uppercase"
            color="purple.400"
            fontWeight={600}
            fontSize="sm"
            p={2}
            alignSelf="flex-start"
            rounded="md"
          >
            Share
          </Text>
          <Heading>Share</Heading>
          <Text fontSize="lg">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore
          </Text>
          <Stack spacing={4}></Stack>
        </Stack>
      </SimpleGrid>
    </>
  );
};

interface FeatureProps {
  text: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon }: FeatureProps) => {
  return (
    <Stack direction="row" align="center">
      <Flex w={8} h={8} align="center" justify="center" rounded="full" bg="white">
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};
