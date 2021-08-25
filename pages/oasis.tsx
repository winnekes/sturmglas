import { useUser } from "@auth0/nextjs-auth0";
import { Loading } from "../app/components/loading";
import { MoodsTimeline } from "../app/components/mood/moods-timeline";
import { PageWrapper } from "../app/components/page-wrapper";
import { Panel } from "../app/components/panel";
import { useMoodsQuery } from "../app/types/graphql";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function Oasis() {
  const { user, isLoading } = useUser();
  const { data, error, loading } = useMoodsQuery();
  const pageTitle = "Oasis";
  const pageSubtitle = "How are you doing today?";

  if (isLoading || loading) {
    return <Loading />;
  }

  if (error || !data || !user) {
    return <>Error</>;
  }

  return (
    <PageWrapper pageTitle={pageTitle}>
      <Panel mt={5}>
        <MoodsTimeline moods={data.moods} />
      </Panel>
    </PageWrapper>
  );
}

export const getServerSideProps = withPageAuthRequired();
