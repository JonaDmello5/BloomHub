import { SVGProps } from 'react';

export function OrchidIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M12 12c0-2.21 1.79-4 4-4s4 1.79 4 4" />
      <path d="M12 12c0-2.21-1.79-4-4-4s-4 1.79-4 4" />
      <path d="M12 12c0 2.21 1.79 4 4 4" />
      <path d="M12 12c0 2.21-1.79 4-4 4" />
      <path d="M12 12c2.21 0 4 1.79 4 4" />
      <path d="M12 12c-2.21 0-4 1.79-4 4" />
      <path d="M12 12h.01" />
    </svg>
  );
}
