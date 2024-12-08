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
            className="flex flex-col h-screen items-center justify-center text-center
             "
          >
            {children}
          </div>
    );
  }
  