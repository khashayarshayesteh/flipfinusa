import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500 font-bold text-white">
              FF
            </div>

            <div>
              <p className="text-xl font-bold text-white">FlipFin USA</p>
              <p className="text-xs text-slate-400">Professional Solutions</p>
            </div>
          </div>

          <p className="mt-5 max-w-sm leading-7 text-slate-400">
            Helping customers move forward with clear communication,
            professional service, and practical solutions.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-white">Quick Links</h2>

          <div className="mt-5 flex flex-col gap-3">
            <Link to="/" className="transition hover:text-emerald-400">
              Home
            </Link>

            <Link to="/about" className="transition hover:text-emerald-400">
              About
            </Link>

            <Link to="/services" className="transition hover:text-emerald-400">
              Services
            </Link>

            <Link to="/contact" className="transition hover:text-emerald-400">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-white">Contact</h2>

          <div className="mt-5 space-y-3 text-slate-400">
            <p>United States</p>

            <a
              href="mailto:info@flipfinusa.com"
              className="block transition hover:text-emerald-400"
            >
              info@flipfinusa.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} FlipFin USA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;