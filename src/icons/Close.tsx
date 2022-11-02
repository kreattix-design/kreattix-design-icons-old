import * as React from 'react'
import { SVGProps } from 'react'
const SvgClose = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width='1em'
		height='1em'
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='M4.239 4.215 19.76 19.738m.034-15.523L4.239 19.77'
			stroke='currentColor'
			strokeWidth={1.7}
			strokeLinecap='round'
		/>
	</svg>
)
export default SvgClose
