/**
 * App – Peamine rakenduse komponent.
 * Kogu sisu mahub ühele ekraanile – kerimist pole.
 * Vasak paneel: tiitel + korruse nupud. Parem: suur plaan.
 */

import { useState } from "react";
import floors from "./data/floors";
import Header from "./components/Header";
import FloorSelector from "./components/FloorSelector";
import FloorPlan from "./components/FloorPlan";
import RoomModal from "./components/RoomModal";

export default function App() {
  const [activeFloor, setActiveFloor] = useState(3);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const currentFloorData = floors[activeFloor];

  return (
    <div className="h-screen flex flex-col bg-[#F5F5F5] relative overflow-hidden">
      {/* ——— Dekoratiivsed geomeetrilised kujundid (VOCO stiil) ——— */}
      <div
        className="absolute top-16 -left-16 w-72 h-72 opacity-[0.12] pointer-events-none"
        style={{
          background: "linear-gradient(135deg, #C72C7A 0%, #E74C3C 100%)",
          clipPath: "polygon(0 0, 100% 0, 0 100%)",
        }}
      />
      <div
        className="absolute top-[45%] -left-20 w-64 h-64 rounded-full border-[40px] border-[#1ABC9C]/[0.10] pointer-events-none"
      />
      <div
        className="absolute top-24 -right-24 w-56 h-56 rounded-full bg-[#3498DB]/[0.08] pointer-events-none"
      />
      <div
        className="absolute bottom-12 -right-10 w-60 h-60 opacity-[0.10] pointer-events-none"
        style={{
          background: "linear-gradient(45deg, #F39C12 0%, #E67E22 100%)",
          clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
        }}
      />

      {/* Header */}
      <Header />

      {/* Põhisisu – üks ekraan, ei keri */}
      <main className="flex-1 flex items-center justify-center overflow-hidden relative z-10 px-6">
        {/* Tsentreeritud konteiner – nupud + plaan kõrvuti */}
        <div className="flex items-center gap-10 w-full max-w-[900px] h-full max-h-[calc(100vh-72px)]">
          {/* ——— Vasak paneel: tiitel + korruse nupud ——— */}
          <aside className="w-48 shrink-0 flex flex-col justify-center py-6">
            <div className="mb-6 animate-[fadeInUp_0.5s_ease_both]">
              <h2 className="text-xl font-extrabold tracking-tight text-[#1A1A1A] leading-tight mb-1.5">
                Klassiruumide<br />plaan
              </h2>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Vali korrus ja kliki ruumile
              </p>
            </div>

            <FloorSelector
              floors={floors}
              activeFloor={activeFloor}
              onSelect={setActiveFloor}
            />

            <p className="mt-auto pt-4 text-[10px] text-neutral-300 tracking-wider">
              © 2026 VOCO
            </p>
          </aside>

          {/* ——— Parem ala: suur plaan ——— */}
          <section className="flex-1 flex items-center justify-center min-w-0 h-full py-4">
            <FloorPlan
              key={`plan-${activeFloor}`}
              floorNum={activeFloor}
              rooms={currentFloorData.rooms}
              onRoomClick={(roomId) => setSelectedRoom(roomId)}
            />
          </section>
        </div>
      </main>

      {/* Modal */}
      {selectedRoom && (
        <RoomModal
          roomId={selectedRoom}
          onClose={() => setSelectedRoom(null)}
        />
      )}
    </div>
  );
}
