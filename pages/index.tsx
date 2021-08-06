import { useUser } from "@auth0/nextjs-auth0";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { user, error, isLoading } = useUser();
  console.log({ user, error });
  // todo seo
  return (
    <div className={styles.container}>
      <Head>
        <title>mentali</title>
        <meta name="description" content="mentali" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
