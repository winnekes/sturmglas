import { Center, Circle, Image } from "@chakra-ui/react";
import Link from "next/link";
import { FunctionComponent } from "react";

type Props = {
  size: string;
};

export const Buddy: FunctionComponent<Props> = ({ size }) => {
  return (
    <Center>
      <Link href="/" passHref>
        <Circle bg="white" boxSize={size} p={2}>
          <Image src="/logo.png" cursor="pointer" m={12} />
        </Circle>
      </Link>
    </Center>
  );
};
