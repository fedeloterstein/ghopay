import * as React from "react"
import { SVGProps } from "react"
export const BottonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={29}
    height={29}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      fillRule="evenodd"
      d="M4.9 4.9c-5.468 5.467-5.468 14.331 0 19.798 5.467 5.468 14.331 5.468 19.798 0 5.468-5.467 5.468-14.331 0-19.799C19.232-.568 10.367-.568 4.9 4.9Zm16.086 12.197a.75.75 0 0 0-1.06 0l-4.023 4.023V8.081a.75.75 0 0 0-1.5 0V21.12l-4.023-4.023a.75.75 0 0 0-1.061 1.06l5.833 5.834 5.834-5.833a.75.75 0 0 0 0-1.06Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      d="M19.925 17.097a.75.75 0 0 1 1.061 1.06l-5.834 5.834-5.833-5.833a.75.75 0 1 1 1.06-1.06l4.024 4.022V8.081a.75.75 0 0 1 1.5 0v13.04l4.022-4.024Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={30.708}
        x2={9.163}
        y1={10.769}
        y2={30.337}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7828C8" stopOpacity={0.27} />
        <stop offset={1} stopColor="#006FEE" />
      </linearGradient>
    </defs>
  </svg>
)

