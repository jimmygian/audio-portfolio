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
        w-[100%]
           `}
    >
      {children}

      {/* Social Links */}
      <SocialLinks />
    </div>
  );
}
