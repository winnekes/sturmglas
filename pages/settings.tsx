import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { IconButton } from "@chakra-ui/react";
import { MdBluetooth, MdBluetoothDisabled } from "react-icons/md";
import { Companion } from "../app/components/companion/companion";
import { PageWrapper } from "../app/components/generic/page-wrapper";
import { useBluetooth } from "../app/hooks/use-bluetooth";

export default function Insights() {
  const bluetooth = useBluetooth();
  const pageTitle = "Settings";
  const subTitle = "Do you have a companion? Let's get you acquainted!";
  return (
    <PageWrapper pageTitle={pageTitle} pageSubtitle={subTitle}>
      <Companion />
      {!bluetooth.state.connected ? (
        <IconButton
          icon={<MdBluetooth />}
          onClick={bluetooth.connect}
          variant="ghost"
          aria-label=""
        />
      ) : (
        <MdBluetoothDisabled onClick={bluetooth.disconnect} />
      )}
    </PageWrapper>
  );
}

export const getServerSideProps = withPageAuthRequired();
