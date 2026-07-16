import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="absolute left-0 right-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-lg font-bold text-white">
            FF
          </div>

          <div>
            <p className="text-xl font-bold tracking-tight text-white">
              FlipFin USA
            </p>

            <p className="text-xs tracking-wide text-slate-300">
              Professional Solutions
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm font-medium text-white transition hover:text-emerald-400"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-sm font-medium text-white transition hover:text-emerald-400"
          >
            About
          </Link>

          <Link
            to="/services"
            className="text-sm font-medium text-white transition hover:text-emerald-400"
          >
            Services
          </Link>

          <Link
            to="/contact"
            className="rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
          >
            Contact Us
          </Link>
        </nav>

        <button
          type="button"
          className="text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((current) => !current)}
        >
          {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="mx-6 rounded-2xl bg-white p-5 shadow-2xl md:hidden">
          <div className="flex flex-col gap-2">
            <Link
              to="/"
              className="rounded-lg px-4 py-3 font-medium text-slate-800 hover:bg-slate-100"
              onClick={closeMenu}
            >
              Home
            </Link>

            <Link
              to="/about"
              className="rounded-lg px-4 py-3 font-medium text-slate-800 hover:bg-slate-100"
              onClick={closeMenu}
            >
              About
            </Link>

            <Link
              to="/services"
              className="rounded-lg px-4 py-3 font-medium text-slate-800 hover:bg-slate-100"
              onClick={closeMenu}
            >
              Services
            </Link>

            <Link
              to="/contact"
              className="mt-2 rounded-lg bg-emerald-500 px-4 py-3 text-center font-semibold text-white"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;