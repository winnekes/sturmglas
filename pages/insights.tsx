import { PageWrapper } from "../app/components/page-wrapper";
import { Panel } from "../app/components/panel";
import { useMoodsQuery } from "../app/types/graphql";

export default function Insights() {
  const { data, error, loading } = useMoodsQuery();

  console.log({ data, error, loading });
  return (
    <PageWrapper>
      <Panel>Insights</Panel>
    </PageWrapper>
  );
}
