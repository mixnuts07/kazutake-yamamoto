import "../styles/globals.css";
// TODO react styleで条件で変更。ここは消してindex.tsxで実装
import "../styles/style.css";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
