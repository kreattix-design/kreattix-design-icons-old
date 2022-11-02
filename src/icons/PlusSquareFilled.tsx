import * as React from 'react'
import { SVGProps } from 'react'
const SvgPlusSquareFilled = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width='1em'
		height='1em'
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M2.8 0A2.8 2.8 0 0 0 0 2.8v18.4A2.8 2.8 0 0 0 2.8 24h18.4a2.8 2.8 0 0 0 2.8-2.8V2.8A2.8 2.8 0 0 0 21.2 0H2.8Zm10.05 4.667a.85.85 0 0 0-1.7 0v6.483H4.667a.85.85 0 0 0 0 1.7h6.483v6.483a.85.85 0 1 0 1.7 0V12.85h6.483a.85.85 0 1 0 0-1.7H12.85V4.667Z'
			fill='currentColor'
		/>
	</svg>
)
export default SvgPlusSquareFilled
