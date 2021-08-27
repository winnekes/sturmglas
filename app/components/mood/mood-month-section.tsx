import { Box, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { MoodsQuery } from "../../types/graphql";
import { MoodEntry } from "./mood-entry";

type Props = {
  month: { name: string; moods: MoodsQuery["moods"] };
  year: { name: number };
};

export const MonthSection: FunctionComponent<Props> = props => {
  return (
    <Box marginBottom="4rem">
      <Text fontSize="xl" mb={10}>
        {props.month.name}, {props.year.name}
      </Text>

      {props.month.moods.map((mood, index) => (
        <MoodEntry key={mood.id} mood={mood} />
      ))}
    </Box>
  );
};
