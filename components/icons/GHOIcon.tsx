import * as React from "react"
export const GHOIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <mask
        id="b"
        width={21}
        height={21}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M21 0H0v21h21V0Z" />
      </mask>
      <g mask="url(#b)">
        <path
          fill="url(#c)"
          d="M10.5 21C16.299 21 21 16.299 21 10.5S16.299 0 10.5 0 0 4.701 0 10.5 4.701 21 10.5 21Z"
        />
        <mask
          id="d"
          width={15}
          height={13}
          x={3}
          y={4}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "luminance",
          }}
        >
          <path fill="#fff" d="M17.378 4.725H3.675v11.55h13.703V4.725Z" />
        </mask>
        <g mask="url(#d)">
          <path
            fill="#fff"
            fillRule="evenodd"
            d="m17.378 14.084-2.128-3.578h-2.678l2.152 3.578H9.37c-1.93 0-3.385-1.62-3.385-3.578 0-1.958 1.456-3.579 3.385-3.579h4.604l-1.311-2.202H9.369c-3.091 0-5.694 2.597-5.694 5.78 0 3.185 2.605 5.77 5.694 5.77h8.01m-7.2-7.4c0 .609-.479 1.102-1.07 1.102-.59 0-1.07-.493-1.07-1.101s.48-1.101 1.07-1.101c.591 0 1.07.493 1.07 1.1Zm-1.07 4.151c.591 0 1.07-.493 1.07-1.1 0-.609-.479-1.102-1.07-1.102-.59 0-1.07.493-1.07 1.101s.48 1.101 1.07 1.101Z"
            clipRule="evenodd"
            opacity={0.8}
          />
        </g>
      </g>
    </g>
    <defs>
      <linearGradient
        id="c"
        x1={10.5}
        x2={10.5}
        y1={0}
        y2={21}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B3B2D3" />
        <stop offset={0.526} stopColor="#8C8ADA" />
        <stop offset={1} stopColor="#6D69DE" />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h21v21H0z" />
      </clipPath>
    </defs>
  </svg>
)

