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
import leftBg from "./images/left.png";
import rightBg from "./images/right.png";

export default function App() {
  const [activeFloor, setActiveFloor] = useState(3);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const currentFloorData = floors[activeFloor];

  return (
    <div className="h-screen flex flex-col bg-[#F5F5F5] relative overflow-hidden">
      {/* ——— Vasakpoolne taustapilt ——— */}
      <img
        src={leftBg}
        alt=""
        className="absolute top-0 left-0 pointer-events-none select-none z-0"
        style={{
          height: "100%",
          maxWidth: "45%",
          objectFit: "contain",
          objectPosition: "left top",
        }}
      />
      {/* ——— Parempoolne taustapilt ——— */}
      <img
        src={rightBg}
        alt=""
        className="absolute bottom-0 right-0 pointer-events-none select-none z-0"
        style={{
          height: "100%",
          maxWidth: "45%",
          objectFit: "contain",
          objectPosition: "right bottom",
        }}
      />

      {/* Header */}
      <Header />

      {/* Põhisisu – üks ekraan, ei keri */}
      <main className="flex-1 flex items-center justify-center overflow-hidden relative z-10 px-6">
        {/* Tsentreeritud konteiner – nupud + plaan kõrvuti */}
        <div className="flex items-center gap-10 w-full max-w-[900px] h-full max-h-[calc(100vh-100px)]">
          {/* ——— Vasak paneel: tiitel + korruse nupud ——— */}
          <aside className="w-48 shrink-0 flex flex-col justify-center py-6">
            <div className="mb-6 animate-[fadeInUp_0.5s_ease_both]">
              <h2 className="text-xl font-extrabold tracking-tight text-[#1A1A1A] leading-tight mb-1.5">
                Klassiruumide
                <br />
                plaan
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
