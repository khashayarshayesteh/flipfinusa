import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/images/flipfin-logo.png";

const links = [
  { href: "/", label: "Home" },
  { href: "/#product", label: "Product" },
  { href: "/#benefits", label: "Benefits" },
  { href: "/#compatibility", label: "Compatibility" },
  { href: "/#installation", label: "Installation" },
  { href: "/#faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMobileMenuOpen(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/" && !location.hash;
    }

    if (href.startsWith("/#")) {
      return location.pathname === "/" && location.hash === href.substring(1);
    }

    return location.pathname === href;
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-[100] border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
          <img
            src={logo}
            alt="Flip Fin logo"
            className="h-14 w-14 rounded-full bg-white object-contain"
          />

          <div>
            <p className="text-xl font-bold tracking-tight text-slate-950">
              Flip Fin
            </p>
            <p className="text-xs tracking-wide text-slate-600">
              Store Smarter. Paddle Further.
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors ${
                isActive(href)
                  ? "text-sky-600"
                  : "text-slate-700 hover:text-sky-600"
              }`}
            >
              {label}
            </a>
          ))}

          <a
            href="/#order"
            className="rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
          >
            Order Now
          </a>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-900 transition hover:bg-slate-100 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((current) => !current)}
        >
          {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="border-t border-slate-200 bg-white px-6 py-5 shadow-lg lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="rounded-lg px-4 py-3 font-medium text-slate-700 transition hover:bg-sky-50 hover:text-sky-600"
                onClick={closeMenu}
              >
                {label}
              </a>
            ))}

            <a
              href="/#order"
              className="mt-2 rounded-lg bg-sky-500 px-4 py-3 text-center font-semibold text-white transition hover:bg-sky-600"
              onClick={closeMenu}
            >
              Order Now
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;