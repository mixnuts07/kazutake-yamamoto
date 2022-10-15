import "../styles/globals.css";
import "../styles/tailwind.css";
// TODO react styleで条件で変更。ここは消してindex.tsxで実装
import "../styles/style.css";
import "../i18n/config";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

// Next.jsで全ページ共通の処理を挟むために書く
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return <Component {...pageProps} />;
}

export default MyApp;
