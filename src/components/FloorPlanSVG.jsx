/**
 * FloorPlanSVG – Skemaatiline hoone SVG-plaan.
 * Hele teema. Markerid on SVG sees <foreignObject> kaudu,
 * seega skaleeruvad nad alati koos plaaniga.
 */

export default function FloorPlanSVG({ floorNum, rooms, onRoomClick }) {
  const markerW = 52;
  const markerH = 32;

  return (
    <svg
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className="w-full h-full"
    >
      {/* Taust – valge */}
      <rect width="600" height="600" fill="#FAFAFA" />

      {/* Välisseinad */}
      <rect
        x="30"
        y="30"
        width="540"
        height="540"
        rx="6"
        fill="#F0F0F0"
        stroke="#CBD5E1"
        strokeWidth="2.5"
      />

      {/* Sisehoov (ÕU) */}
      <rect
        x="150"
        y="150"
        width="300"
        height="300"
        rx="6"
        fill="#E8F5E9"
        stroke="#A5D6A7"
        strokeWidth="1.5"
        strokeDasharray="6 3"
      />

      {/* Ülemised vaheseinad */}
      {[135, 240, 360, 465].map((x) => (
        <line
          key={`t-${x}`}
          x1={x}
          y1="30"
          x2={x}
          y2="150"
          stroke="#CBD5E1"
          strokeWidth="1.5"
        />
      ))}

      {/* Alumised vaheseinad */}
      {[135, 240, 360, 465].map((x) => (
        <line
          key={`b-${x}`}
          x1={x}
          y1="450"
          x2={x}
          y2="570"
          stroke="#CBD5E1"
          strokeWidth="1.5"
        />
      ))}

      {/* Vasakud vaheseinad */}
      {[135, 240, 345, 450].map((y) => (
        <line
          key={`l-${y}`}
          x1="30"
          y1={y}
          x2="150"
          y2={y}
          stroke="#CBD5E1"
          strokeWidth="1.5"
        />
      ))}

      {/* Parempoolsed vaheseinad */}
      {[135, 240, 345, 450].map((y) => (
        <line
          key={`r-${y}`}
          x1="450"
          y1={y}
          x2="570"
          y2={y}
          stroke="#CBD5E1"
          strokeWidth="1.5"
        />
      ))}

      {/* Trepikoda – alumine vasak */}
      <rect
        x="36"
        y="500"
        width="52"
        height="60"
        rx="3"
        fill="#F5F5F5"
        stroke="#CBD5E1"
        strokeWidth="1"
      />
      {[510, 518, 526, 534, 542, 550].map((y) => (
        <line
          key={`sl-${y}`}
          x1="42"
          y1={y}
          x2="82"
          y2={y}
          stroke="#D1D5DB"
          strokeWidth="0.8"
        />
      ))}
      <text
        x="62"
        y="530"
        textAnchor="middle"
        fontSize="8"
        fill="#9CA3AF"
        fontFamily="Inter, sans-serif"
      >
        trepp
      </text>

      {/* Trepikoda – alumine parem */}
      <rect
        x="510"
        y="500"
        width="52"
        height="60"
        rx="3"
        fill="#F5F5F5"
        stroke="#CBD5E1"
        strokeWidth="1"
      />
      {[510, 518, 526, 534, 542, 550].map((y) => (
        <line
          key={`sr-${y}`}
          x1="516"
          y1={y}
          x2="556"
          y2={y}
          stroke="#D1D5DB"
          strokeWidth="0.8"
        />
      ))}
      <text
        x="536"
        y="530"
        textAnchor="middle"
        fontSize="8"
        fill="#9CA3AF"
        fontFamily="Inter, sans-serif"
      >
        trepp
      </text>

      {/* Trepikoda – ülemine keskmine */}
      <rect
        x="265"
        y="36"
        width="70"
        height="40"
        rx="3"
        fill="#F5F5F5"
        stroke="#CBD5E1"
        strokeWidth="1"
      />
      {[44, 51, 58, 65].map((y) => (
        <line
          key={`st-${y}`}
          x1="271"
          y1={y}
          x2="329"
          y2={y}
          stroke="#D1D5DB"
          strokeWidth="0.8"
        />
      ))}

      {/* Ukseavad – vasak koridor */}
      {[170, 265, 370].map((y) => (
        <rect
          key={`dl-${y}`}
          x="147"
          y={y}
          width="6"
          height="18"
          rx="1"
          fill="#E8F0FE"
        />
      ))}
      {/* Ukseavad – parem koridor */}
      {[170, 265, 370].map((y) => (
        <rect
          key={`dr-${y}`}
          x="447"
          y={y}
          width="6"
          height="18"
          rx="1"
          fill="#E8F0FE"
        />
      ))}
      {/* Ukseavad – ülemine koridor */}
      {[175, 285, 405].map((x) => (
        <rect
          key={`dt-${x}`}
          x={x}
          y="147"
          width="18"
          height="6"
          rx="1"
          fill="#E8F0FE"
        />
      ))}
      {/* Ukseavad – alumine koridor */}
      {[175, 285, 405].map((x) => (
        <rect
          key={`db-${x}`}
          x={x}
          y="447"
          width="18"
          height="6"
          rx="1"
          fill="#E8F0FE"
        />
      ))}

      {/* Sisehoov tekst */}
      <text
        x="300"
        y="280"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Inter, sans-serif"
        fontSize="11"
        fontWeight="500"
        fill="#66BB6A"
        letterSpacing="3"
      >
        🌳
      </text>
      <text
        x="300"
        y="305"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Inter, sans-serif"
        fontSize="18"
        fontWeight="600"
        fill="#81C784"
        letterSpacing="3"
      >
        SISEHOOV
      </text>
      <text
        x="300"
        y="335"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Inter, sans-serif"
        fontSize="12"
        fontWeight="400"
        fill="#A5D6A7"
        letterSpacing="2"
      >
        {floorNum}. KORRUS
      </text>

      {/* ——— Klassiruumide markerid SVG sees ——— */}
      {rooms &&
        rooms.map((room) => (
          <foreignObject
            key={room.id}
            x={room.x - markerW / 2}
            y={room.y - markerH / 2}
            width={markerW}
            height={markerH}
          >
            <button
              xmlns="http://www.w3.org/1999/xhtml"
              onClick={() => onRoomClick(room.id)}
              title={`Klass ${room.id}`}
              style={{
                width: "100%",
                height: "100%",
                fontSize: "11px",
                fontWeight: 700,
                fontFamily: "Inter, sans-serif",
                lineHeight: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "6px",
                background: "rgba(255,255,255,0.92)",
                border: "1px solid #D1D5DB",
                color: "#404040",
                cursor: "pointer",
                boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                whiteSpace: "nowrap",
                userSelect: "none",
                WebkitUserSelect: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {room.id}
            </button>
          </foreignObject>
        ))}
    </svg>
  );
}
