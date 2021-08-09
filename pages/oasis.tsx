import { PageWrapper } from "../app/components/page-wrapper";
import { Panel } from "../app/components/panel";
import { useMoodsQueryQuery } from "../graphql";

export default function Oasis() {
  const { data, error, loading } = useMoodsQueryQuery();

  console.log({ data, error, loading });
  return (
    <PageWrapper>
      <Panel>Test</Panel>
    </PageWrapper>
  );
}
