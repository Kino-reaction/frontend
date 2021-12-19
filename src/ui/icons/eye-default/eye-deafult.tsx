export const EyeDefault = ({ color }: { color?: string }) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_629_3046)">
        <path
          d="M1.31409 12C1.31409 12 5.31409 4 12.3141 4C19.3141 4 23.3141 12 23.3141 12C23.3141 12 19.3141 20 12.3141 20C5.31409 20 1.31409 12 1.31409 12Z"
          stroke={color ?? "#FAFAFA"}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.3141 15C13.9709 15 15.3141 13.6569 15.3141 12C15.3141 10.3431 13.9709 9 12.3141 9C10.6572 9 9.31409 10.3431 9.31409 12C9.31409 13.6569 10.6572 15 12.3141 15Z"
          stroke={color ?? "#FAFAFA"}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_629_3046">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.314087)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
