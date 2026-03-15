/**
 * Header – VOCO stiilis must header.
 * Must taust, valge tekst, VOCO logo/nimi.
 */

export default function Header() {
  return (
    <header className="w-full self-stretch bg-[#1A1A1A] px-6 py-4 flex items-center justify-between sticky top-0 z-40 shadow-lg">
      {/* Logo + nimi */}
      <div className="flex items-center gap-3">
        {/* VOCO-stiilis logo märk */}
        <div className="flex items-center gap-0.5">
          <div className="grid grid-cols-2 gap-[3px]">
            <div className="w-3.5 h-3.5 rounded-full bg-white" />
            <div className="w-3.5 h-3.5 rounded-full border-2 border-white" />
            <div className="w-3.5 h-3.5 rounded-full border-2 border-white" />
            <div className="w-3.5 h-3.5 rounded-full bg-white" />
          </div>
        </div>
        <div className="leading-tight">
          <p className="text-white font-bold text-sm tracking-wide">TARTU RAKENDUSLIK KOLLEDŽ</p>
          <p className="text-neutral-400 text-[10px] tracking-[0.15em] uppercase">Tartu Vocational College</p>
        </div>
      </div>

      {/* Nav placeholder */}
      <nav className="hidden sm:flex items-center gap-6">
        <span className="text-white/70 text-xs font-medium hover:text-white transition cursor-default">Avatud uksed</span>
        <span className="text-white text-xs font-semibold border-b-2 border-[#C72C7A] pb-0.5 cursor-default">Klassiruumid</span>
        <span className="text-white/70 text-xs font-medium hover:text-white transition cursor-default">Kontakt</span>
      </nav>
    </header>
  );
}
