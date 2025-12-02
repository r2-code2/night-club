import Footer from "./components/Footer";
import Header from "./components/header/Header";
import { HeadingXL, HeadingMain, HeadingSecondary, Subheading, Caption } from "./components/typography";
export default function Home() {
  return (
    <>
      <Header />
      <main className="grid col-(--full-col) grid-cols-subgrid"></main>
      <Footer />
    </>
  );
}
