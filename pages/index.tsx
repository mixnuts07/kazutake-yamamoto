import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Bio from "../components/Bio";
import Profile from "../components/Profile";
import Skills from "../components/Skills";

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
      <main className="bg-blue max-w-4/5 mx-auto dark:bg-dark dark:text-whitesmoke">
        <Header />
        <button onClick={toggleMode}>Toggle Mode</button>
        <Bio />
        <Profile />
        <Skills />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
