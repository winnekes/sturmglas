import { PageWrapper } from "../app/components/page-wrapper";
import { Splash } from "../app/components/splash";
import { Center, Heading, VStack, Text } from "@chakra-ui/react";
import { Subtitle, Title } from "../app/components/text/titles";
export default function Home() {
  // TODO nicer splash screen
  // TODO landing page
  // TODO seo
  return (
    <PageWrapper>
      <VStack>
        <Title>mentali</Title>
        <Subtitle pb={20}>your mental health companion</Subtitle>
        <Splash />
      </VStack>
    </PageWrapper>
  );
}
