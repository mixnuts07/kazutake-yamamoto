import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";

const Home: NextPage = () => {
  const [darkMode, setDarkMode] = useState<string>("dark");
  const toggleMode = () => {
    darkMode === "dark" ? setDarkMode("") : setDarkMode("dark");
  };
  return (
    <div className={darkMode}>
      <Head>
        <title>MyApp</title>
        <meta name="description" content="For Learning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <button onClick={toggleMode}>Toggle Mode</button>
      <body className="bg-blue max-w-4/5 mx-auto dark:bg-dark">
        <h1 className="dark:text-whitesmoke">HEY</h1>
      </body>
    </div>
  );
};

export default Home;
