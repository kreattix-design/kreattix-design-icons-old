import * as React from 'react'
import { SVGProps } from 'react'
const SvgCloseSquareOutlined = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width='1em'
		height='1em'
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<rect
			x={0.7}
			y={0.7}
			width={22.6}
			height={22.6}
			rx={2.1}
			stroke='currentColor'
			strokeWidth={1.4}
		/>
		<path
			d='m6.826 6.81 10.348 10.348m.023-10.348L6.826 17.18'
			stroke='currentColor'
			strokeWidth={1.7}
			strokeLinecap='round'
		/>
	</svg>
)
export default SvgCloseSquareOutlined
