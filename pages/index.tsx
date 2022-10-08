import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Bio from "../components/Bio";
import Profile from "../components/Profile";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  // TODO darkMode, toggleModeをHeaderコンポーネントから渡すようにする（子→親）
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
      <main className="bg-blue mx-auto dark:bg-dark dark:text-whitesmoke">
        <Header />
        <button className="mt-24" onClick={toggleMode}>
          Toggle Mode
        </button>
        <Bio />
        <Profile />
        <Skills />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
