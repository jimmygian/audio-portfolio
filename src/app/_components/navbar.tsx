import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className={`
        w-full
        fixed
        top-0
        z-50
    `}
    >
      <div
        className={`
            flex
            justify-between
            mx-7
            my-2
        `}
      >
        <div className={`w-[60%] max-w-[30rem] flex gap-2 justify-between`}>
          <Link href="/audio-post">Audio Post</Link>
          <Link href="/music">Music</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className={``}>
          <Link href="/home">Home</Link>
        </div>
      </div>
    </nav>
  );
}
