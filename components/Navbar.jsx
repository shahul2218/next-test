import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="bg-slate-800 w-full shadow-sm fixed">
      <div className="bg-slate-800 rounded-sm  overflow-hidden md:w-10/12 sm:w-11/12 mx-auto ">
        <div className="flex justify-between items-center h-16 md:px-5 px-3">
          <section className="text-slate-200 text-2xl">
            <Link href="/">Logo</Link>
          </section>
          <nav>
            <ul
              className={isMobile ? "mobile-menu" : "menu"}
              onClick={() => setIsMobile(false)}
            >
              <li
                className={
                  router.pathname == "/"
                    ? "px-3 py-2 mx-1 rounded-md text-slate-200 bg-slate-700 font-semibold"
                    : "cursor-pointer font-semibold px-3 py-2 mx-1 text-slate-400"
                }
              >
                <Link href="/">home</Link>
              </li>
              <li
                className={
                  router.pathname == "/contact"
                    ? "px-3 py-2 mx-1 rounded-md text-slate-200 bg-slate-700 font-semibold "
                    : "cursor-pointer font-semibold px-3 py-2 mx-1 text-slate-400"
                }
              >
                <Link href="/contact">contact</Link>
              </li>
            </ul>
          </nav>
          <button
            className="btn shadow-md p-2 rounded-md md:hidden mobile-menu-button bg-slate-700 text-slate-200"
            onClick={() => setIsMobile(!isMobile)}
            aria-label="Menu Toggler"
          >
            {isMobile ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
