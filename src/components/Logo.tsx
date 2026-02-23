export function Logo({ className = "", size = 32 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Fork handle */}
      <rect x="22" y="24" width="4" height="18" rx="2" fill="#d97706" />

      {/* Fork tines that morph into circuit paths */}
      <path
        d="M14 6 L14 18 Q14 22 18 22 L22 22"
        stroke="#d97706"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M24 6 L24 22"
        stroke="#d97706"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M34 6 L34 18 Q34 22 30 22 L26 22"
        stroke="#d97706"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* Neural network nodes */}
      <circle cx="14" cy="5" r="3" fill="#d97706" />
      <circle cx="24" cy="5" r="3" fill="#d97706" />
      <circle cx="34" cy="5" r="3" fill="#d97706" />

      {/* Circuit connection lines */}
      <line x1="17" y1="5" x2="21" y2="5" stroke="#d97706" strokeWidth="1.5" opacity="0.5" />
      <line x1="27" y1="5" x2="31" y2="5" stroke="#d97706" strokeWidth="1.5" opacity="0.5" />

      {/* Small circuit dots on tines */}
      <circle cx="14" cy="12" r="1.5" fill="white" opacity="0.8" />
      <circle cx="24" cy="14" r="1.5" fill="white" opacity="0.8" />
      <circle cx="34" cy="12" r="1.5" fill="white" opacity="0.8" />
    </svg>
  );
}
