import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
import Bio from "../components/Bio";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  // TODO darkMode, toggleModeをHeaderコンポーネントから渡すようにする（子→親）
  const [darkMode, setDarkMode] = useState<string>("dark");
  const toggleDarkMode = (): void => {
    darkMode === "dark" ? setDarkMode("") : setDarkMode("dark");
  };
  return (
    <div className={darkMode}>
      <Head>
        <title>MyApp</title>
        <meta name="description" content="For Learning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-4/5 mx-auto bg-whitesmoke text-dark dark:bg-dark dark:text-whitesmoke">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Profile />
        <Bio />
        <Skills />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
