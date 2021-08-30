import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/alert";
import { FunctionComponent } from "react";

type Props = {
  title?: string;
  description?: string;
};

export const ErrorAlert: FunctionComponent<Props> = ({ title, description }) => {
  return (
    <Alert status="error" variant="subtle" bg="red">
      <AlertIcon />
      <AlertTitle>{title ? title : "Oh no"}</AlertTitle>
      <AlertDescription display="block">
        {description ? description : "Something went wrong. Please try again later"}
      </AlertDescription>
    </Alert>
  );
};
