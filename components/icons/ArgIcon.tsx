import * as React from "react"
import { SVGProps } from "react"
export const ArgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <path
        fill="#FDFDFD"
        d="M11.997 19.994C6.476 19.994 2 15.518 2 9.997S6.476 0 11.997 0c5.52 0 9.997 4.476 9.997 9.997s-4.476 9.997-9.997 9.997Z"
      />
      <path
        fill="#338AF3"
        d="M20.727 5.123A9.994 9.994 0 0 0 11.997 0a9.994 9.994 0 0 0-8.73 5.123h17.46Z"
      />
      <path
        fill="#338AF3"
        d="M20.727 5.123A9.994 9.994 0 0 0 11.997 0a9.994 9.994 0 0 0-8.73 5.123h17.46ZM3.267 14.995a9.994 9.994 0 0 0 8.73 5.124 9.994 9.994 0 0 0 8.73-5.124H3.268Z"
      />
      <path
        fill="#338AF3"
        d="M3.267 14.995a9.994 9.994 0 0 0 8.73 5.124 9.994 9.994 0 0 0 8.73-5.124H3.268Z"
      />
      <path
        fill="#FFDA44"
        d="m11.747 7.939-.962-.941-.241 1.294L9.1 8.174l.602 1.176-1.204.588 1.204.588-.482 1.177 1.324-.118.24 1.411.963-1.058.963 1.058.24-1.411 1.324.117-.481-1.176 1.203-.588-1.323-.588.601-1.176-1.323.118-.241-1.294-.963.94Z"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={23.994}
        height={24.119}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_306_1004"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_306_1004"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
