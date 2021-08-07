import { Image } from "@chakra-ui/react";
import Link from "next/link";
import { FunctionComponent } from "react";

type Props = {
  size: string;
};

export const Buddy: FunctionComponent<Props> = ({ size }) => {
  return (
    <Link href="/" passHref>
      <Image src="/logo.png" boxSize={size} cursor="pointer" my={12} />
    </Link>
  );
};
