import "../styles/globals.css";
import "../styles/tailwind.css";
// TODO react styleで条件で変更。ここは消してindex.tsxで実装
import "../styles/style.css";
import "../i18n/config";

// Next.jsで全ページ共通の処理を挟むために書く
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
