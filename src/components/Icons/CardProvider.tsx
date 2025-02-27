import { SVGProps } from 'react'

export const CardProvider = (props: SVGProps<SVGSVGElement>) => {
  return (

<svg 
     fill="none"
     xmlns="http://www.w3.org/2000/svg"
     preserveAspectRatio="xMidYMid meet"
     {...props}
>
        <circle cx="15" cy="15" r="15"/>
        <circle cx="29" cy="15" r="15"/>
    </svg>

  )
}
