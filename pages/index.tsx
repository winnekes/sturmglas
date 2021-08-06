import { useUser } from "@auth0/nextjs-auth0";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Splash } from "../components/splash";
import { navigation } from "../components/navigation/navigation";

export default function Home() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  // // TODO nicer splash screen
  // // TODO landing page
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (user) router.push(navigation.home);
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, [user]);

  // todo seo
  return (
    <div>
      <Head>
        <title>mentali</title>
        <meta name="description" content="mentali" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*<Splash />*/}
    </div>
  );
}
