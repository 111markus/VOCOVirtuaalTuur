/**
 * FloorSelector – Vertikaalne korruse valikumenüü.
 * Nupud üksteise all vasakpaneelil.
 */

export default function FloorSelector({ floors, activeFloor, onSelect }) {
  const colors = {
    1: { bg: "bg-[#C72C7A]", border: "border-[#C72C7A]" },
    2: { bg: "bg-[#1ABC9C]", border: "border-[#1ABC9C]" },
    3: { bg: "bg-[#3498DB]", border: "border-[#3498DB]" },
    4: { bg: "bg-[#F39C12]", border: "border-[#F39C12]" },
  };

  return (
    <nav className="flex flex-col gap-2">
      {Object.keys(floors).map((num, i) => {
        const isActive = Number(num) === activeFloor;
        const color = colors[Number(num)] || colors[1];
        return (
          <button
            key={num}
            onClick={() => onSelect(Number(num))}
            style={{ animationDelay: `${i * 60}ms` }}
            className={`
              inline-flex items-center gap-3
              w-full px-4 py-3 rounded-xl text-sm font-bold leading-none
              transition-all duration-200 cursor-pointer select-none whitespace-nowrap
              animate-[fadeInUp_0.4s_ease_both]
              ${
                isActive
                  ? `${color.bg} text-white shadow-lg`
                  : "bg-white text-neutral-500 border border-neutral-200 hover:border-neutral-300 hover:shadow-md"
              }
            `}
          >
            <span
              className={`
              w-2 h-2 rounded-full shrink-0 transition-colors
              ${isActive ? "bg-white" : `${color.bg} opacity-40`}
            `}
            />
            Korrus {num}
          </button>
        );
      })}
    </nav>
  );
}
