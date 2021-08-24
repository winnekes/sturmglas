import { PageWrapper } from "../app/components/page-wrapper";
import { Splash } from "../app/components/splash";
import { Center, Heading, Text } from "@chakra-ui/react";
export default function Home() {
  // TODO nicer splash screen
  // TODO landing page
  // TODO seo
  return (
    <PageWrapper>
      <Center>
        <Heading as="h1" mb={20}>
          mentali - your mental health companion
        </Heading>
      </Center>
      <Splash />
    </PageWrapper>
  );
}
