import Footer from "./components/footer/Footer";
import { HeadingXL, HeadingMain, HeadingSecondary, Subheading, Caption } from "./components/typography";
export default function Home() {
  return (
    <>
      <main className="grid col-(--full-col) grid-cols-subgrid"></main>
      <Footer />
    </>
  );
}
