import "../styles/globals.css";
import "../styles/tailwind.css";
// TODO react styleで条件で変更。ここは消してindex.tsxで実装
import "../styles/style.css";
import "../i18n/config";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
