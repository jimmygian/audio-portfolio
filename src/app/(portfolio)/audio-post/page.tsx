import Hero from "@/app/_components/hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AUDIO-POST",
  description: "Portfolio showcasing audio-post projects.",
};

export default function Page() {
  const title: string = "Audio Post-Production";
  const subtitle: string =
    "VO Recordings, Dialogue clean-ups, Mixing for TV, Radio and Socials for top-tier clients: Spotify, Paddy Power, Audible, Tonies (offline showreel available upon request)";

  return (
    <>
      <Hero title={title} subtitle={subtitle} hHeight={82}/>
    </>
  );
}
