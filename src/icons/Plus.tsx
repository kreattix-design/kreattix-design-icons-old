import * as React from 'react'
import { SVGProps } from 'react'
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width='1em'
		height='1em'
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='M12 1v22m11-11H1'
			stroke='currentColor'
			strokeWidth={1.7}
			strokeLinecap='round'
		/>
	</svg>
)
export default SvgPlus
