/**
 * Header – VOCO stiilis must header.
 * Must taust, VOCO logo pildina. Stiil nagu voco.ee.
 */

import vocoLogo from "../images/voco-logo-04-3.png";

export default function Header() {
  return (
    <header
      className="w-full self-stretch bg-[#1A1A1A] px-16 flex items-center justify-between sticky top-0 z-40"
      style={{ minHeight: "90px" }}
    >
      {/* Logo */}
      <a href="/" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }}>
        <img
          src={vocoLogo}
          alt="VOCO – Tartu Rakenduslik Kolledž"
          className="h-[60px]"
        />
      </a>

      {/* Nav */}
      <nav className="hidden md:flex items-center gap-14">
        <a href="https://voco.ee/tunniplaan/" target="_blank" rel="noopener noreferrer" className="text-white text-[16px] font-light tracking-wide hover:text-white/80 transition">
          Tunniplaan
        </a>
        <span className="text-white text-[16px] font-light tracking-wide border-b-2 border-transparent hover:border-[#C72C7A] pb-0.5 transition cursor-default">
          Klassiruumid
        </span>
        <span className="text-white text-[16px] font-light tracking-wide hover:text-white/80 transition cursor-default">
          Kontakt
        </span>
      </nav>
    </header>
  );
}
