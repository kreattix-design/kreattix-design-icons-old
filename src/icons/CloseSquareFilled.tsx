import * as React from 'react'
import { SVGProps } from 'react'
const SvgCloseSquareFilled = (props: SVGProps<SVGSVGElement>) => (
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
			d='M2.8 0A2.8 2.8 0 0 0 0 2.8v18.4A2.8 2.8 0 0 0 2.8 24h18.4a2.8 2.8 0 0 0 2.8-2.8V2.8A2.8 2.8 0 0 0 21.2 0H2.8Zm4.627 6.209A.85.85 0 0 0 6.225 7.41l4.584 4.584-4.584 4.585a.85.85 0 1 0 1.202 1.202l4.584-4.585 4.562 4.562a.85.85 0 1 0 1.202-1.202l-4.562-4.562 4.585-4.584a.85.85 0 1 0-1.202-1.202l-4.585 4.584L7.427 6.21Z'
			fill='currentColor'
		/>
	</svg>
)
export default SvgCloseSquareFilled
