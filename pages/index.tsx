import { PageWrapper } from "../app/components/page-wrapper";
import { Splash } from "../app/components/splash";
import { Text } from "@chakra-ui/react";
export default function Home() {
  // TODO nicer splash screen
  // TODO landing page
  // TODO seo
  return (
    <PageWrapper>
      <Splash />
      <Text>Test</Text> <Splash />
    </PageWrapper>
  );
}
