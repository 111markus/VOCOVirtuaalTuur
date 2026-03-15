/**
 * RoomMarker – Klassiruumi marker hele teemaga.
 * Valge nupp tumehal tekstiga, värvikas hover.
 */

export default function RoomMarker({ room, index, onClick }) {
  return (
    <button
      onClick={() => onClick(room.id)}
      title={`Klass ${room.id}`}
      style={{
        left: `${room.x}%`,
        top: `${room.y}%`,
        transform: "translate(-50%, -50%)",
        animationDelay: `${index * 30}ms`,
      }}
      className="
        absolute z-10
        inline-flex items-center justify-center
        px-2 py-1.5
        rounded-md
        bg-white/90 backdrop-blur-sm
        border border-neutral-300
        shadow-sm
        text-neutral-700 text-[11px] font-bold leading-none whitespace-nowrap
        cursor-pointer select-none
        transition-all duration-200 ease-out
        hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A]
        hover:shadow-lg hover:scale-110
        active:scale-95
        animate-[fadeInUp_0.35s_ease_both]
      "
    >
      {room.id}
    </button>
  );
}
