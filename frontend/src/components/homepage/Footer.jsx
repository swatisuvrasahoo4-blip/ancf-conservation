import { Link } from "react-router-dom";

import heros from "../images/hero.png";

// Site footer
const Footer = () => {
  return (
    <footer className="w-full bg-black px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src={heros}
                alt="ANCF logo"
                className="h-10 w-10 object-contain"
              />

              <h2 className="font-serif text-lg font-bold text-white">
                ANCF
              </h2>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-amber-50/80">
              Protecting Asian elephant landscapes across South
              and Southeast Asia since 1997.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-amber-600">
              Explore
            </h3>

            <nav className="mt-4 flex flex-col gap-2">
              <Link
                to="/mission"
                className="text-sm text-amber-50 transition hover:text-amber-500"
              >
                Mission
              </Link>

              <Link
                to="/program"
                className="text-sm text-amber-50 transition hover:text-amber-500"
              >
                Programs
              </Link>

              <Link
                to="/partner"
                className="text-sm text-amber-50 transition hover:text-amber-500"
              >
                Partners
              </Link>

              <Link
                to="/donate"
                className="text-sm text-amber-50 transition hover:text-amber-500"
              >
                Donate
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-amber-600">
              Connect
            </h3>

            <nav className="mt-4 flex flex-col gap-2">
              <Link
                to="/contact"
                className="text-sm text-amber-50 transition hover:text-amber-500"
              >
                Contact
              </Link>

              <Link
                to="/signin"
                className="text-sm text-amber-50 transition hover:text-amber-500"
              >
                Sign In
              </Link>

              <Link
                to="/signup"
                className="text-sm text-amber-50 transition hover:text-amber-500"
              >
                Sign Up
              </Link>
            </nav>
          </div>

          {/* Visit */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-amber-600">
              Visit
            </h3>

            <div className="mt-4 space-y-2">
              <p className="text-sm text-amber-50">
                Bangalore, India
              </p>

              <a
                href="https://asiannature.org"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-amber-50 transition hover:text-amber-500"
              >
                asiannature.org
              </a>
            </div>
          </div>
        </div>

        <hr className="my-8 border-green-800" />

        {/* Footer bottom */}
        <div className="flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-xs font-serif text-amber-50/80 sm:text-sm">
            © 2026 Asian Nature Conservation Foundation.
            All rights reserved.
          </p>

          <p className="text-xs font-serif uppercase tracking-wider text-amber-50/80 sm:text-sm">
            Est. 1997 · Asian Elephant Conservation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;