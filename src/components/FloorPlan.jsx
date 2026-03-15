/**
 * FloorPlan – Korruseplaan valgel kaardil.
 * Markerid on nüüd SVG sees (foreignObject),
 * seega skaleeruvad alati koos plaaniga.
 */

import FloorPlanSVG from "./FloorPlanSVG";

export default function FloorPlan({ floorNum, rooms, onRoomClick }) {
  return (
    <div className="relative aspect-square h-full max-h-full mx-auto rounded-2xl overflow-hidden animate-[fadeInUp_0.4s_ease_both] bg-white border border-neutral-200 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <FloorPlanSVG floorNum={floorNum} rooms={rooms} onRoomClick={onRoomClick} />
    </div>
  );
}
