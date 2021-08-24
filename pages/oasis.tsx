import { useUser } from "@auth0/nextjs-auth0";
import { Buddy } from "../app/components/buddy";
import { MoodsTimeline } from "../app/components/mood/moods-timeline";
import { PageWrapper } from "../app/components/page-wrapper";
import { Panel } from "../app/components/panel";
import { useMoodsQuery } from "../app/types/graphql";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function Oasis() {
  const { user, isLoading } = useUser();
  const { data, error, loading } = useMoodsQuery();

  if (isLoading || loading) {
    return <>Loading</>;
  }

  if (error || !data || !user) {
    return <>Error</>;
  }

  return (
    <PageWrapper>
      <Buddy size="130px" />
      <Panel mt={5}>
        <MoodsTimeline moods={data.moods} />
      </Panel>
    </PageWrapper>
  );
}

export const getServerSideProps = withPageAuthRequired();
