import "../styles/global.css";

export default function App({ Component, pageProps }) {
  console.log("APP");
  return <Component {...pageProps} />;
}
