import { Companion } from "../app/components/companion/companion";
import { Loading } from "../app/components/generic/loading";
import { Splash } from "../app/components/generic/splash";
import { MoodsTimeline } from "../app/components/mood/moods-timeline";
import { PageWrapper } from "../app/components/generic/page-wrapper";
import { Panel } from "../app/components/generic/panel";
import { useMoodsQuery } from "../app/types/graphql";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { splitAndSortMoodsByYearAndMonth } from "../app/utils/split-and-sort-moods";

export default function Oasis() {
  const { data, error, loading } = useMoodsQuery();

  const pageTitle = "Oasis";
  const pageSubtitle = "How are you doing today?";

  if (loading) {
    return <Splash />;
  }

  // todo error components
  if (error || !data) {
    return <>Error</>;
  }

  const mappedMoods = splitAndSortMoodsByYearAndMonth(data.moods);

  return (
    <PageWrapper pageTitle={pageTitle}>
      <Companion latestMood={data.latestMood} />
      <Panel mt={5}>
        <MoodsTimeline moods={mappedMoods} />
      </Panel>
    </PageWrapper>
  );
}

export const getServerSideProps = withPageAuthRequired();
