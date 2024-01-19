import * as React from "react";
import { SVGProps } from "react";
export const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={19}
    fill="none"
    {...props}
  >
    <g strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
      <circle cx={8.805} cy={8.806} r={7.49} stroke="url(#a)" />
      <path stroke="url(#b)" d="m14.015 14.404 2.937 2.93" />
    </g>
    <defs>
      <linearGradient
        id="a"
        x1={1.262}
        x2={16.816}
        y1={4.311}
        y2={5.06}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7828C8" stopOpacity={0.27} />
        <stop offset={1} stopColor="#006FEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={14.005}
        x2={17.054}
        y1={14.99}
        y2={15.137}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7828C8" stopOpacity={0.27} />
        <stop offset={1} stopColor="#006FEE" />
      </linearGradient>
    </defs>
  </svg>
);
