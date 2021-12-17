import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="pt-4 md:w-10/12 sm:w-11/12 mx-auto">
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
              <h5 className="text-xl font-bold mb-6 text-slate-100">
                Features
              </h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <Link href="/">
                    <a className="border-b border-solid border-transparent text-slate-400 hover:border-slate-50 hover:text-slate-50">
                      Cool stuff
                    </a>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/">
                    <a className="border-b border-solid border-transparent text-slate-400 hover:border-slate-50 hover:text-slate-50">
                      Random feature
                    </a>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/">
                    <a className="border-b border-solid border-transparent text-slate-400 hover:border-slate-50 hover:text-slate-50">
                      Team feature
                    </a>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/">
                    <a className="border-b border-solid border-transparent text-slate-400 hover:border-slate-50 hover:text-slate-50">
                      Stuff for developers
                    </a>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/">
                    <a className="border-b border-solid border-transparent text-slate-400 hover:border-slate-50 hover:text-slate-50">
                      Another one
                    </a>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/">
                    <a className="border-b border-solid border-transparent text-slate-400 hover:border-slate-50 hover:text-slate-50">
                      Last time
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
              <h5 className="text-xl font-bold mb-6 text-slate-100">
                Resources
              </h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <Link href="/">
                    <a className="border-b border-solid border-transparent text-slate-400 hover:border-slate-50 hover:text-slate-50">
                      Resource
                    </a>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/">
                    <a className="border-b border-solid border-transparent text-slate-400 hover:border-slate-50 hover:text-slate-50">
                      Resource name
                    </a>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/">
                    <a className="border-b border-solid border-transparent text-slate-400 hover:border-slate-50 hover:text-slate-50">
                      Another resource
                    </a>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/">
                    <a className="border-b border-solid border-transparent text-slate-400 hover:border-slate-50 hover:text-slate-50">
                      Final resource
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 className="text-xl font-bold mb-6 text-slate-100">About</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <Link href="/">
                    <a className="border-b border-solid border-transparent text-slate-400 hover:border-slate-50 hover:text-slate-50">
                      Team
                    </a>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/">
                    <a className="border-b border-solid border-transparent text-slate-400 hover:border-slate-50 hover:text-slate-50">
                      Locations
                    </a>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/">
                    <a className="border-b border-solid border-transparent text-slate-400 hover:border-slate-50 hover:text-slate-50">
                      Privacy
                    </a>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/">
                    <a className="border-b border-solid border-transparent text-slate-400 hover:border-slate-50 hover:text-slate-50">
                      Terms
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 className="text-xl font-bold mb-6 text-slate-100">Help</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <Link href="/">
                    <a className="border-b border-solid border-transparent text-slate-400 hover:border-slate-50 hover:text-slate-50">
                      Support
                    </a>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/">
                    <a className="border-b border-solid border-transparent text-slate-400 hover:border-slate-50 hover:text-slate-50">
                      Help Center
                    </a>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/">
                    <a className="border-b border-solid border-transparent text-slate-400 hover:border-slate-50 hover:text-slate-50">
                      Contact Us
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
              <h5 className="text-xl font-bold mb-6 text-slate-100 sm:text-center xl:text-left">
                Stay connected
              </h5>
              <div className="flex sm:justify-center xl:justify-start">
                <Link href="/">
                  <a
                    href=""
                    className="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 sm:mt-12 sm:pt-12 border-t"></div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
