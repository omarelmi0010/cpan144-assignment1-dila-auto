import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";

// _app.tsx wraps every page in the app.
// The Navbar is placed here so the menu appears on all pages.
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar garageName="Dila Auto Repair & Collision" />
            <main className="page">
        <Component {...pageProps} />
      </main>
    </>
  );
}