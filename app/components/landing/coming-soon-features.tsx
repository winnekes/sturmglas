import { ReactElement } from "react";
import { Box, HStack, Icon, Text, VStack, Flex, Heading, Stack } from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <VStack>
      <Flex w={16} h={16} align="center" justify="center" color="white" rounded="full" mb={4}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text>{text}</Text>
    </VStack>
  );
};

export const ComingSoonFeatures = () => {
  return (
    <Box p={4} mt={10} mb={5}>
      <Heading as="h2" textAlign="center">
        Coming soon
      </Heading>
      <Stack direction={["column", "row"]} spacing={10} mt={10} justifyContent="center">
        <Feature
          icon={<Icon as={FcAssistant} w={20} h={20} />}
          title="Lifetime Support"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
        />
        <Feature
          icon={<Icon as={FcDonate} w={20} h={20} />}
          title="Unlimited Donations"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
        />
        <Feature
          icon={<Icon as={FcInTransit} w={20} h={20} />}
          title="Instant Delivery"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
        />
      </Stack>
    </Box>
  );
};
