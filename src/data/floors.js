/**
 * Korruste ja klassiruumide andmestruktuur.
 *
 * Kogu SVG on 600×600 viewBox.
 * Hoone välisseina ristkülik: x=30..570, y=30..570
 * Sisehoov (õu):               x=150..450, y=150..450
 *
 * Koordinaadid on SVG viewBoxi pikslites (0–600).
 * Markerid renderdatakse SVG <foreignObject> abil,
 * seega skaleeruvad automaatselt koos SVG-ga.
 */

// ——— Vasak tiib: 5 ruumi keskpunktid (SVG px) ———
const LX = 90;            // (30+150)/2
const LY = [
  (30 + 135) / 2,         // ≈ 82.5
  (135 + 240) / 2,        // ≈ 187.5
  (240 + 345) / 2,        // ≈ 292.5
  (345 + 450) / 2,        // ≈ 397.5
  (450 + 570) / 2,        // ≈ 510
];

// ——— Parem tiib: 4 ruumi keskpunktid ———
const RX = 510;           // (450+570)/2
const RY = [
  (30 + 135) / 2,
  (135 + 240) / 2,
  (240 + 345) / 2,
  (345 + 450) / 2,
];

// ——— Ülemine tiib: 3 ruumi keskpunktid ———
const TY = 90;            // (30+150)/2
const TX = [
  (135 + 240) / 2,        // ≈ 187.5
  (240 + 360) / 2,        // ≈ 300
  (360 + 465) / 2,        // ≈ 412.5
];

// ——— Alumine tiib: 3 ruumi keskpunktid ———
const BY = 510;           // (450+570)/2
const BX = [
  (135 + 240) / 2,
  (240 + 360) / 2,
  (360 + 465) / 2,
];

/**
 * Genereerib korrusele 15 klassiruumi.
 * @param {string} prefix – korruse number ("1", "2", "3", "4")
 */
function makeRooms(prefix) {
  return [
    // Vasak tiib (01–05, ülevalt alla)
    { id: `${prefix}01`, x: LX, y: LY[0] },
    { id: `${prefix}02`, x: LX, y: LY[1] },
    { id: `${prefix}03`, x: LX, y: LY[2] },
    { id: `${prefix}04`, x: LX, y: LY[3] },
    { id: `${prefix}05`, x: LX, y: LY[4] },
    // Ülemine tiib (06–08, vasakult paremale)
    { id: `${prefix}06`, x: TX[0], y: TY },
    { id: `${prefix}07`, x: TX[1], y: TY },
    { id: `${prefix}08`, x: TX[2], y: TY },
    // Parem tiib (09–12, ülevalt alla)
    { id: `${prefix}09`, x: RX, y: RY[0] },
    { id: `${prefix}10`, x: RX, y: RY[1] },
    { id: `${prefix}11`, x: RX, y: RY[2] },
    { id: `${prefix}12`, x: RX, y: RY[3] },
    // Alumine tiib (13–15, vasakult paremale)
    { id: `${prefix}13`, x: BX[0], y: BY },
    { id: `${prefix}14`, x: BX[1], y: BY },
    { id: `${prefix}15`, x: BX[2], y: BY },
  ];
}

const floors = {
  1: { label: "1. korrus", rooms: makeRooms("1") },
  2: { label: "2. korrus", rooms: makeRooms("2") },
  3: { label: "3. korrus", rooms: makeRooms("3") },
  4: { label: "4. korrus", rooms: makeRooms("4") },
};

export default floors;
