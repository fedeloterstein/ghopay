import * as React from "react"
import { SVGProps } from "react"

export const BridgeIconV2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <path
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m11.958 8.744-2.922 2.928M2.042 8.744h9.916M2.042 5.256l2.922-2.928M11.958 5.256H2.042"
    />
  </svg>
)

