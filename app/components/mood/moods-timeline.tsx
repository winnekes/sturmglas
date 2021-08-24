import { Box, Center, Heading, HStack, Icon, Text } from "@chakra-ui/react";
import { DateTime as time } from "luxon";
import { FunctionComponent } from "react";
import { MoodsQuery } from "../../types/graphql";
import { emotions } from "../../types/mood";
import { Subheading } from "../text/subheading";
import { PanelTitle } from "../text/titles";

type Moods = MoodsQuery["moods"];

type Props = {
  moods: Moods;
};

type SplitMoods = {
  year: number;
  months: Array<{ month: string; moods: Moods }>;
}[];

const splitAndSortMoodsByYearAndMonth = (moods: Moods) => {
  const splitMoods = moods.reduce((total, currentMood) => {
    const year = time.fromISO(currentMood.date).year;
    const month = time
      .fromISO(currentMood.date)
      .toLocaleString({ month: "long" });

    // TODO: simplify logic if possible
    const yearRowFound = total.find(yearRow => yearRow.year === year);
    if (yearRowFound) {
      const monthRowFound = yearRowFound.months.find(
        monthRow => monthRow.month === month
      );
      monthRowFound
        ? monthRowFound.moods.push(currentMood)
        : yearRowFound.months.push({ month, moods: [currentMood] });
    } else {
      total.push({ year, months: [{ month, moods: [currentMood] }] });
    }

    return total;
  }, [] as SplitMoods);

  return splitMoods.map(year => {
    year.months.map(month => {
      const sorted = month.moods.sort((a, b) =>
        a.date > b.date ? -1 : a.date < b.date ? 1 : 0
      );
      return { month, moods: [...sorted] };
    });
    return year;
  });
};

// todo mental weather
export const MoodsTimeline: FunctionComponent<Props> = ({ moods }) => {
  const mappedMoods = splitAndSortMoodsByYearAndMonth(moods);

  return (
    <>
      <PanelTitle>Your mood timeline</PanelTitle>

      {mappedMoods.map(year => (
        <Box key={year.year}>
          {year.months.map(month => (
            <Box marginBottom="4rem" key={month.month}>
              <Text fontSize="xl" mb={10}>
                {month.month},{year.year}
              </Text>

              {month.moods.map((mood, index) => {
                const previousDay =
                  index > 0 &&
                  time
                    .fromISO(month.moods[index - 1].date)
                    .toLocaleString({ day: "numeric" });

                const currentDay = time
                  .fromISO(mood.date)
                  .toLocaleString({ day: "numeric" });

                return (
                  <HStack
                    align="flex-start"
                    justify="flex-start"
                    spacing={6}
                    key={mood.id}
                  >
                    <Box
                      minHeight="20px"
                      alignSelf="stretch"
                      alignContent="center"
                      w="30px"
                      minWidth="30px"
                      bg={emotions[mood.emotion].color}
                      borderTopRadius={index === 0 ? "25px" : "0px"}
                      borderBottomRadius={
                        index === month.moods.length - 1 ? "25px" : "0px"
                      }
                    />
                    <Box paddingBottom={20}>
                      <Subheading fontSize="sm" color="gray.600">
                        {time
                          .fromISO(mood.date)
                          .toLocaleString(time.DATETIME_SHORT)}
                      </Subheading>
                      <Text fontWeight="bold" textTransform="capitalize">
                        {emotions[mood.emotion].name}
                      </Text>
                      <Text> {mood.description}</Text>
                    </Box>
                  </HStack>
                );
              })}
            </Box>
          ))}
        </Box>
      ))}
    </>
  );
};
