import { PageWrapper } from "../app/components/page-wrapper";
import { Panel } from "../app/components/panel";
import { useMoodsQueryQuery } from "../graphql";

export default function Insights() {
  const { data, error, loading } = useMoodsQueryQuery();

  console.log({ data, error, loading });
  return (
    <PageWrapper>
      <Panel>Insights</Panel>
    </PageWrapper>
  );
}
