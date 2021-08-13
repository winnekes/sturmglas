import { Center, Circle, Image } from "@chakra-ui/react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { useLatestMoodQuery } from "../types/graphql";

type Props = {
  size: string;
};

export const Buddy: FunctionComponent<Props> = ({ size }) => {
  const { data, error, loading } = useLatestMoodQuery();

  // TODO Generic component
  if (loading) {
    return <>Loading</>;
  }

  if (error || !data) {
    return <>Error</>;
  }
  return (
    <Center>
      <Link href="/" passHref>
        <Circle bg="white" boxSize={size} p={2}>
          <Image src="/logo.png" cursor="pointer" m={12} />
          latest mood : {data.latestMood.emotion}
        </Circle>
      </Link>
    </Center>
  );
};
