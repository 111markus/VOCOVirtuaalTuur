/**
 * RoomModal – Klassiruumi detailvaate popup.
 * Hele VOCO stiil – valge kaart, värvikas rõhk.
 */

import { useEffect, useCallback } from "react";

export default function RoomModal({ roomId, onClose }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div
      onClick={onClose}
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/40 backdrop-blur-sm
        animate-[fadeIn_0.2s_ease_both]
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          bg-white rounded-2xl
          w-[90%] max-w-[420px]
          shadow-[0_24px_80px_rgba(0,0,0,0.15)]
          animate-[scaleIn_0.3s_ease_both]
          overflow-hidden
        "
      >
        {/* Päis – must riba */}
        <div className="flex items-center justify-between px-5 py-4 bg-[#1A1A1A]">
          <h2 className="text-base font-bold text-white tracking-wide">
            Klass{" "}
            <span className="text-[#C72C7A]">{roomId}</span>
          </h2>
          <button
            onClick={onClose}
            className="
              w-8 h-8 rounded-lg
              inline-flex items-center justify-center
              bg-white/10 text-white/60
              hover:bg-white/20 hover:text-white
              transition-all duration-200
              cursor-pointer text-sm leading-none
            "
            aria-label="Sulge"
          >
            ✕
          </button>
        </div>

        {/* Sisu */}
        <div className="p-5 flex flex-col items-center gap-4">
          <div className="w-full aspect-[16/10] rounded-xl bg-neutral-100 border border-neutral-200 overflow-hidden">
            <img
              src={`https://placehold.co/800x500/F5F5F5/1A1A1A?text=Klass+${roomId}&font=inter`}
              alt={`Klassiruumi ${roomId} vaade`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center space-y-1.5">
            <p className="text-sm text-neutral-700">
              Klassiruumi{" "}
              <span className="font-bold text-[#1A1A1A]">{roomId}</span>{" "}
              uksevaade
            </p>
            <p className="text-xs text-neutral-400">
              Pilt asendatakse tulevikus reaalse fotoga
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
