import ModeBtn from "../_components/modeBtn";
import SocialLinks from "../_components/socialLinks";

export const metadata = {
  title: "Dimitris Gian | Home",
  description:
    "Dimitris is a professional Audio Engineer with programming experience.",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`
        flex 
        flex-col 
        h-[100%] 
        items-center 
        justify-center 
        text-center
        gap-2
           `}
    >
      {children}

      {/* MODE Dark/Light */}
      <ModeBtn />

      {/* Social Links */}
      <SocialLinks />
    </div>
  );
}
