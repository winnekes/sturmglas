import { Box, Heading, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { PolarArea } from "react-chartjs-2";
import { colors } from "../../styles/theme";

import { StatisticsQuery } from "../../types/graphql";
import { emotions } from "../../types/mood";

type Props = {
  moodCounts: StatisticsQuery["statistics"]["moodCounts"];
};
const options = {
  scales: {
    r: {
      ticks: { display: false },
      grid: {
        color: "transparent",
      },
      angleLines: {
        color: colors.brand01,
      },
      pointLabels: {
        color: colors.brand01,
      },
    },
  },
};

const config = {
  responsive: true,

  scales: {
    r: {
      ticks: { precision: 0, backdropColor: "transparent" },
      grid: {
        color: "#232834",
      },
    },
  },
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: false,
    },
  },
};

export const MoodRadar: FunctionComponent<Props> = ({ moodCounts }) => {
  const data = {
    labels: moodCounts.map(moodCount => moodCount.emotion.toLowerCase()),
    datasets: [
      {
        label: "Your mood distribution overall",
        data: moodCounts.map(moodCount => moodCount.count),
        backgroundColor: moodCounts.map(moodCount => emotions[moodCount.emotion].color + "22"),
        borderColor: moodCounts.map(moodCount => emotions[moodCount.emotion].color),
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box my={10}>
      <Heading as="h3" size="lg">
        Your mood distribution over time
      </Heading>
      <Text mb={12}>It is good to have perspective.</Text>
      <PolarArea data={data} options={config} />
    </Box>
  );
};
