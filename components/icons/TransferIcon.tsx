import * as React from "react"
import { SVGProps } from "react"
export const TransferIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.625 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10"
    />
    <path
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.625 11 8.2-8.2M22.625 6.83V2h-4.83"
    />
  </svg>
)

