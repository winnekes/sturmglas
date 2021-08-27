import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { PageWrapper } from "../app/components/page-wrapper";
import { Panel } from "../app/components/panel";
import { useMoodsQuery } from "../app/types/graphql";

export default function Insights() {
  const pageTitle = "Insights";
  const subTitle = "This is an overview of you";
  return (
    <PageWrapper pageTitle={pageTitle} pageSubtitle={subTitle}>
      <Panel>Insights</Panel>
    </PageWrapper>
  );
}

export const getServerSideProps = withPageAuthRequired();
