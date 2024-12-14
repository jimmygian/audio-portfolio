
import Navbar from "@/app/_components/navbar";

export const metadata = {
    title: "Dimitris | ENV Variablees",
    description:
      "Dimitris is a variable.",
  };
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
          <div
            className="h-[300vh] flex flex-col items-center justify-center text-center
             "
          >
            {children}
            <Navbar />
          </div>
    );
  }
  