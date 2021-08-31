import { ReactElement } from "react";
import { Box, HStack, Icon, Text, VStack, Flex, Heading, Stack } from "@chakra-ui/react";
import { BiTask } from "react-icons/bi";
import { TiThListOutline } from "react-icons/ti";
import { RiGroup2Line } from "react-icons/ri";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <VStack flexGrow={1} flexBasis={0}>
      <Flex
        align="center"
        justify="center"
        rounded="full"
        bg="purple.100"
        color="purple.700"
        mb={4}
        p={4}
      >
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
      <Stack
        direction={["column", "row"]}
        spacing={10}
        mt={10}
        flexGrow={1}
        flexBasis={0}
        justifyContent="space-between"
      >
        <Feature
          icon={<Icon as={BiTask} w={20} h={20} />}
          title="Missions"
          text="sturmglas will actively help you achieve your goals to improve your mental health."
        />
        <Feature
          icon={<Icon as={RiGroup2Line} w={20} h={20} />}
          title="Cocoons"
          text="Get together with people from all around, create or and join groups, exchange mental health tips and more."
        />

        <Feature
          icon={<Icon as={TiThListOutline} w={20} h={20} />}
          title="Habits"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
        />
      </Stack>
    </Box>
  );
};
