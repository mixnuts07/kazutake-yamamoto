import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { IconContext } from "react-icons";
import Head from "next/head";
import Header from "../components/Header";
import ThreeObj from "../components/Flower";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
import Bio from "../components/Bio";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  // 多言語の切り替え
  const [t, i18n] = useTranslation();
  const [lang, setLang] = useState("ja");
  // TODO darkMode, toggleModeをHeaderコンポーネントから渡すようにする（子→親）
  const [darkMode, setDarkMode] = useState<string>("dark");
  const toggleDarkMode = (): void => {
    darkMode === "dark" ? setDarkMode("") : setDarkMode("dark");
  };
  // https://react.i18next.com/legacy-v9/step-by-step-guide
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);
  const ChangeLang = (): void => {
    setLang(lang === "en" ? "ja" : "en");
  };
  return (
    <div className={darkMode}>
      <Head>
        <title>MyApp</title>
        <meta name="description" content="For Learning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="lg:max-w-1/2 max-w-1 mx-auto text-whitesmoke bg-lime dark:bg-dark ">
        <IconContext.Provider value={{ className: "icon-style" }}>
          <Header
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            ChangeLang={ChangeLang}
          />
          <ThreeObj />
          <Profile t={t} />
          <Bio t={t} />
          <Skills />
          <Footer t={t} />
        </IconContext.Provider>
      </main>
    </div>
  );
};
export default Home;
