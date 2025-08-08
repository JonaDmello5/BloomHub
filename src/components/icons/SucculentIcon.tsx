import { SVGProps } from 'react';

export function SucculentIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M12 2v2" />
      <path d="M19.07 4.93l-1.41 1.41" />
      <path d="M4.93 4.93l1.41 1.41" />
      <path d="M22 12h-2" />
      <path d="M4 12H2" />
      <path d="M19.07 19.07l-1.41-1.41" />
      <path d="M4.93 19.07l1.41-1.41" />
      <path d="M12 22v-2" />
      <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" />
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    </svg>
  );
}
