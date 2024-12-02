export const metadata = {
  title: "Dimitris | Counter",
  description:
    "Dimitris is a counter.",
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
