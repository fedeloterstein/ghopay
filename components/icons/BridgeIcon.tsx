import * as React from "react";
import { SVGProps } from "react";
export const BridgeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m20.875 14.99-5.01 5.02M3.875 14.99h17M3.875 9.01l5.01-5.02M20.875 9.01h-17"
    />
  </svg>
);
