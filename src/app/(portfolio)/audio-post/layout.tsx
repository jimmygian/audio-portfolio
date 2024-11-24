export default function AudioPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={`audio-post`}>
      {/* Include shared UI here e.g. a header or sidebar */}
      {children}
    </section>
  );
}
