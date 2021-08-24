import Head from "next/head";
import { PageWrapper } from "../app/components/page-wrapper";
import { Splash } from "../app/components/splash";

export default function Home() {
  // TODO nicer splash screen
  // TODO landing page
  // TODO seo
  return (
    <>
      <Head>
        <title>mentali</title>
        <meta name="description" content="mentali" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageWrapper>
        <Splash />
      </PageWrapper>
    </>
  );
}
