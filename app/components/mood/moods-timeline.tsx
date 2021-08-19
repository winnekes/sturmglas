import { Box } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { MoodsQuery } from "../../types/graphql";
import { DateTime as time } from "luxon";

type Moods = MoodsQuery["moods"];

type Props = {
  moods: Moods;
};

type SplitMoods = {
  year: number;
  months: Array<{ month: number; moods: Moods }>;
}[];

const splitMoodsByYearAndMonth = (moods: Moods) => {
  return moods.reduce((total, currentMood) => {
    const year = time.fromISO(currentMood.date).year;
    const month = time.fromISO(currentMood.date).month;

    const yearRowFound = total.find(yearRow => yearRow.year === year);
    if (yearRowFound) {
      const monthRowFound = yearRowFound.months.find(
        monthRow => monthRow.month === month
      );
      if (monthRowFound) {
        monthRowFound.moods.push(currentMood);
      } else {
        yearRowFound.months.push({ month, moods: [currentMood] });
      }
    } else {
      total.push({ year, months: [{ month, moods: [currentMood] }] });
    }
    return total;
  }, [] as SplitMoods);
};

export const MoodsTimeline: FunctionComponent<Props> = ({ moods }) => {
  const mappedMoods = splitMoodsByYearAndMonth(moods);
  console.log({ mappedMoods });
  return (
    <Box>
      {mappedMoods.map(year => (
        <Box>
          {year.year}
          <br />
          {year.months.map(month => (
            <Box>
              {month.month}
              <br />
              {month.moods.map(mood => mood.emotion)}
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};
