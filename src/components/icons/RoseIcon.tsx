import { SVGProps } from 'react';

export function RoseIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M12 2c-2.4 0-4.6.8-6.4 2.3 1.5-1.1 3.4-1.8 5.4-1.8s3.9.7 5.4 1.8C16.6 2.8 14.4 2 12 2z" />
      <path d="M6.2 8.6C7.9 6.2 10.4 5 12 5s4.1 1.2 5.8 3.6" />
      <path d="M12 12c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
      <path d="M4 14.6c2.7-1.4 5.4-2.1 8-2.1s5.3.7 8 2.1" />
      <path d="M4 18.2c2.7-1.4 5.4-2.1 8-2.1s5.3.7 8 2.1" />
      <path d="M12 22c-4 0-8-1-8-4v-2c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v2c0 3-4 4-8 4z" />
    </svg>
  );
}
