import * as React from 'react'
import { SVGProps } from 'react'
const SvgPlusSquareOutlined = (props: SVGProps<SVGSVGElement>) => (
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
			d='M12 4.667v14.666M19.333 12H4.667'
			stroke='currentColor'
			strokeWidth={1.7}
			strokeLinecap='round'
		/>
	</svg>
)
export default SvgPlusSquareOutlined
