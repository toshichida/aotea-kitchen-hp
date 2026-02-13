import { Hero } from "./components/sections/Hero";
import { ThreePillars } from "./components/sections/ThreePillars";
import { FeaturedMenu } from "./components/sections/FeaturedMenu";
import { Philosophy } from "./components/sections/Philosophy";
import { SpacePreview } from "./components/sections/SpacePreview";
import { InstagramFeed } from "./components/sections/InstagramFeed";
import { VisitInfo } from "./components/sections/VisitInfo";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aotea Kitchen | Japanese Craft & NZ Nature",
  description: "Experience the fusion of Japanese omotenashi and New Zealand's finest ingredients in Ponsonby, Auckland.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream">
        <Hero />
        <ThreePillars />
        <FeaturedMenu />
        <Philosophy />
        <SpacePreview />
        <InstagramFeed />
        <VisitInfo />
      </main>
      <Footer />
    </>
  );
}
