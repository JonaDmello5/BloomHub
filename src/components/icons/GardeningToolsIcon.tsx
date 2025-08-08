import { SVGProps } from 'react';

export function GardeningToolsIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M6 22V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14" />
      <path d="M11 6V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2" />
      <path d="M11 12H5" />
      <path d="M19 12h-6" />
      <path d="M11 18H5" />
      <path d="M19 18h-6" />
    </svg>
  );
}
