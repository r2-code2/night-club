import HomeHero from "./components/home/hero/HomeHero";

export default function Home() {
  return (
    <>
      <main className="grid col-(--full-col) grid-cols-subgrid">
        <HomeHero />
      </main>
    </>
  );
}
