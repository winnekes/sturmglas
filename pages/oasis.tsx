import { DateTime as time } from "luxon";
import { Companion } from "../app/components/companion/companion";
import { Loading } from "../app/components/loading";
import { MoodsTimeline } from "../app/components/mood/moods-timeline";
import { PageWrapper } from "../app/components/page-wrapper";
import { Panel } from "../app/components/panel";
import { MoodsQuery, useMoodsQuery } from "../app/types/graphql";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { splitAndSortMoodsByYearAndMonth } from "../app/utils/split-and-sort-moods";

export default function Oasis() {
  const { data, error, loading } = useMoodsQuery();
  const pageTitle = "Oasis";
  const pageSubtitle = "How are you doing today?";

  if (loading) {
    return <Loading />;
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
