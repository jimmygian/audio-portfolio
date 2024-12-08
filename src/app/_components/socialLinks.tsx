import React from 'react'
import { FaEnvelope, FaGithub, FaImdb, FaLinkedin } from 'react-icons/fa'

export default function SocialLinks() {
  return (
    <div
    className={`
        w-full
        fixed
        bottom-10
      `}
  >
    <div className="flex flex-grow justify-center min-[100px]:space-x-4 sm:space-x-11">
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
  )
}
