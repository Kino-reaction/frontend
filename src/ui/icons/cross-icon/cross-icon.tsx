const colors: Record<string, string> = {
  active: "#FAFAFA",
  inActive: "#000000",
  color: "#EC4926",
};

type Props = {
  status: " active" | "inActive" | "color";
};

export const CrossIcon = ({ status }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18"
        stroke={colors[status]}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke={colors[status]}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
