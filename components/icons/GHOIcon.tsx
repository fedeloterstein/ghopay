import * as React from "react"
import { SVGProps } from "react"
export const GHOIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={19}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <mask
        id="b"
        width={19}
        height={19}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M19 0H0v19h19V0Z" />
      </mask>
      <g mask="url(#b)">
        <path
          fill="url(#c)"
          d="M9.5 19a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19Z"
        />
        <mask
          id="d"
          width={13}
          height={11}
          x={3}
          y={4}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "luminance",
          }}
        >
          <path fill="#fff" d="M15.723 4.275H3.325v10.45h12.398V4.275Z" />
        </mask>
        <g mask="url(#d)">
          <path
            fill="#fff"
            fillRule="evenodd"
            d="m15.723 12.743-1.926-3.238h-2.423l1.948 3.238H8.477c-1.746 0-3.063-1.467-3.063-3.238s1.318-3.238 3.063-3.238h4.165l-1.186-1.992h-2.98c-2.796 0-5.151 2.35-5.151 5.23 0 2.881 2.357 5.22 5.152 5.22h7.246M9.21 8.03c0 .55-.433.996-.968.996-.535 0-.968-.446-.968-.996s.433-.996.968-.996c.535 0 .968.446.968.996Zm-.968 3.755c.535 0 .968-.446.968-.996s-.433-.996-.968-.996c-.535 0-.968.446-.968.996s.433.996.968.996Z"
            clipRule="evenodd"
            opacity={0.8}
          />
        </g>
      </g>
    </g>
    <defs>
      <linearGradient
        id="c"
        x1={9.5}
        x2={9.5}
        y1={0}
        y2={19}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B3B2D3" />
        <stop offset={0.526} stopColor="#8C8ADA" />
        <stop offset={1} stopColor="#6D69DE" />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h19v19H0z" />
      </clipPath>
    </defs>
  </svg>
)

