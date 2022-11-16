import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function Subroute() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next site 2 subroute</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Site 2 in netlify - subroute</h1>
      </main>
    </div>
  );
}