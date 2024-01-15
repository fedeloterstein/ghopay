import * as React from "react"
import { SVGProps } from "react"

export const CopyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      fillRule="evenodd"
      d="M14.004 6.902H8.633c-.742 0-1.343.601-1.343 1.343v5.37c0 .509.282.951.699 1.18.325.177.644.464.644.835 0 .37-.305.68-.665.588a2.687 2.687 0 0 1-2.02-2.602V8.245a2.686 2.686 0 0 1 2.685-2.686h5.37c1.255 0 2.308.86 2.604 2.021.09.36-.218.665-.589.665-.37 0-.658-.319-.836-.644a1.342 1.342 0 0 0-1.178-.7Zm-1.14 3.905h4.07c.922 0 1.668.747 1.668 1.668v4.071c0 .921-.746 1.668-1.668 1.668h-4.07a1.668 1.668 0 0 1-1.668-1.668v-4.07c0-.922.746-1.669 1.667-1.669Zm-3.336 1.668a3.336 3.336 0 0 1 3.335-3.335h4.072a3.336 3.336 0 0 1 3.335 3.335v4.071a3.335 3.335 0 0 1-3.335 3.336h-4.072a3.335 3.335 0 0 1-3.335-3.336v-4.07Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="a"
        x1={5.897}
        x2={20.767}
        y1={8.424}
        y2={9.139}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7828C8" stopOpacity={0.27} />
        <stop offset={1} stopColor="#006FEE" />
      </linearGradient>
    </defs>
  </svg>
)

