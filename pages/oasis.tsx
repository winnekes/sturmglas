import { useState } from "react";
import { Companion } from "../app/components/companion/companion";
import { ErrorAlert } from "../app/components/generic/error-alert";
import { Splash } from "../app/components/generic/splash";
import { MoodsTimeline } from "../app/components/mood/moods-timeline";
import { PageWrapper } from "../app/components/generic/page-wrapper";
import { Panel } from "../app/components/generic/panel";
import { AddMoodModal } from "../app/components/mood/update-mood/add-mood-modal";
import { TutorialManager } from "../app/components/tutorial/tutorial-manager";
import { useMoodsQuery } from "../app/types/graphql";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { UserSettings } from "../app/types/user";
import { splitAndSortMoodsByYearAndMonth } from "../app/utils/split-and-sort-moods";

export default function Oasis() {
  const [showAddFirstMood, setShowAddFirstMood] = useState(false);
  const { data, error, loading, refetch } = useMoodsQuery();

  console.log({ data, error, loading });
  const pageTitle = "Oasis";
  const pageSubtitle = "How are you doing today?";

  if (loading) {
    return <Splash />;
  }

  if (error || !data) {
    return <ErrorAlert />;
  }

  const mappedMoods = splitAndSortMoodsByYearAndMonth(data.moods);

  const userSettings = data.profile.settings as UserSettings;

  return (
    <PageWrapper pageTitle={pageTitle}>
      <Companion latestMood={data.latestMood} />
      <Panel mt={5}>
        <MoodsTimeline moods={mappedMoods} />
      </Panel>

      {!userSettings.hasFinishedTutorial && (
        <TutorialManager
          profile={data.profile}
          setShowAddFirstMood={setShowAddFirstMood}
          refetchData={() => refetch()}
        />
      )}

      {userSettings.hasFinishedTutorial && showAddFirstMood && (
        <AddMoodModal onClose={() => setShowAddFirstMood(false)} />
      )}
    </PageWrapper>
  );
}

export const getServerSideProps = withPageAuthRequired();
