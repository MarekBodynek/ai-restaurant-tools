export function Logo({ className = "", size = 32 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Neural network background (subtle) */}
      <g opacity="0.08">
        <circle cx="90" cy="100" r="5" fill="#1B2B5E" />
        <circle cx="420" cy="95" r="5" fill="#E53935" />
        <circle cx="75" cy="400" r="4" fill="#E53935" />
        <circle cx="430" cy="410" r="4" fill="#1B2B5E" />
        <circle cx="256" cy="55" r="4" fill="#1B2B5E" />
        <circle cx="457" cy="256" r="4" fill="#1B2B5E" />
        <line x1="90" y1="100" x2="256" y2="55" stroke="#1B2B5E" strokeWidth="1.5" />
        <line x1="256" y1="55" x2="420" y2="95" stroke="#E53935" strokeWidth="1.5" />
        <line x1="90" y1="100" x2="75" y2="400" stroke="#1B2B5E" strokeWidth="1.5" />
        <line x1="420" y1="95" x2="457" y2="256" stroke="#1B2B5E" strokeWidth="1.5" />
        <line x1="457" y1="256" x2="430" y2="410" stroke="#1B2B5E" strokeWidth="1.5" />
        <line x1="75" y1="400" x2="430" y2="410" stroke="#E53935" strokeWidth="1.5" />
      </g>

      {/* Gear/cog */}
      <g transform="translate(256,256)">
        <g fill="#1B2B5E">
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
            <polygon
              key={angle}
              points="-12,-200 12,-200 15,-153 -15,-153"
              transform={`rotate(${angle})`}
            />
          ))}
        </g>
        <circle cx="0" cy="0" r="162" fill="#1B2B5E" />
        <circle cx="0" cy="0" r="133" fill="white" />
      </g>

      {/* Fork (navy, left) */}
      <g fill="#1B2B5E">
        <rect x="225" y="292" width="14" height="70" rx="7" />
        <rect x="226" y="257" width="12" height="40" rx="6" />
        <rect x="208" y="165" width="8" height="72" rx="4" />
        <rect x="221" y="165" width="8" height="72" rx="4" />
        <rect x="234" y="165" width="8" height="72" rx="4" />
        <rect x="247" y="165" width="8" height="72" rx="4" />
        <rect x="208" y="233" width="47" height="11" rx="5.5" />
      </g>

      {/* Knife (red, right) */}
      <g fill="#E53935">
        <rect x="273" y="292" width="14" height="70" rx="7" />
        <rect x="270" y="278" width="20" height="20" rx="5" />
        <path d="M272,170 C272,163 288,163 288,170 L290,278 L270,278 Z" />
      </g>

      {/* Inner neural dots */}
      <g opacity="0.13">
        <circle cx="175" cy="218" r="3" fill="#E53935" />
        <circle cx="337" cy="218" r="3" fill="#1B2B5E" />
        <circle cx="175" cy="302" r="3" fill="#1B2B5E" />
        <circle cx="337" cy="302" r="3" fill="#E53935" />
        <line x1="175" y1="218" x2="210" y2="240" stroke="#E53935" strokeWidth="1" />
        <line x1="337" y1="218" x2="302" y2="240" stroke="#1B2B5E" strokeWidth="1" />
        <line x1="175" y1="302" x2="210" y2="280" stroke="#1B2B5E" strokeWidth="1" />
        <line x1="337" y1="302" x2="302" y2="280" stroke="#E53935" strokeWidth="1" />
      </g>
    </svg>
  );
}
