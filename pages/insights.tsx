import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { PageWrapper } from "../app/components/page-wrapper";
import { Panel } from "../app/components/panel";
import { useMoodsQuery } from "../app/types/graphql";

export default function Insights() {
  const { data, error, loading } = useMoodsQuery();

  return (
    <PageWrapper>
      <Panel>Insights</Panel>
    </PageWrapper>
  );
}

export const getServerSideProps = withPageAuthRequired();
