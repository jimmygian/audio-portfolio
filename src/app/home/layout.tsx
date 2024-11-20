import { FaLinkedin, FaGithub, FaImdb, FaEnvelope } from "react-icons/fa";

export const metadata = {
  title: "Dimitris | Audio Portfolio",
  description:
    "Dimitris is a professional Audio Engineer with programming experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative ">
        <div
          className="flex flex-col h-screen items-center justify-center text-center
           "
        >
          {children}

          {/* MODE Dark/Light */}
          <button className="fixed bottom-14 right-20 px-5 py-5 rounded-xl bg-slate-400 opacity-50"></button>

          {/* Social Links */}
          <div
            className={`
            flex
            justify-center
            items-end
            fixed
            bottom-10
          `}
          >
            <div className="flex flex-grow justify-end min-[100px]:space-x-4 sm:space-x-11">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/jimmygian"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-800 hover:text-blue-700 transition-colors"
              >
                <FaLinkedin size={20} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/jimmygian"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-800 hover:text-gray-900 transition-colors"
              >
                <FaGithub size={20} />
              </a>

              {/* IMDb */}
              <a
                href="https://www.imdb.com/name/nm6632543/?ref_=nv_sr_srsg_1_tt_1_nm_7_in_0_q_jimmygian"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="IMDb"
                className="text-gray-800 hover:text-yellow-600 transition-colors"
              >
                <FaImdb size={20} />
              </a>

              {/* Email */}
              <a
                href="mailto:dimitrisgiannoulis.jg@gmail.com"
                aria-label="Email"
                className="text-gray-800 hover:text-gray-500 transition-colors"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>

      </body>
    </html>
  );
}
