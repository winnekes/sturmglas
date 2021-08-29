import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { PAGES } from "../app/components/navigation/navigation";
import { PageWrapper } from "../app/components/generic/page-wrapper";
import { Splash } from "../app/components/generic/splash";
import { VStack } from "@chakra-ui/react";
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

  return (
    <PageWrapper hideNavigation>
      <VStack>
        <Title>sturmglas.</Title>
        <Subtitle pb={20}>your mental weather tracker</Subtitle>
        <Splash />
      </VStack>
    </PageWrapper>
  );
}
