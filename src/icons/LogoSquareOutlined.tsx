import * as React from 'react'
import { SVGProps } from 'react'
const SvgLogoSquareOutlined = (props: SVGProps<SVGSVGElement>) => (
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
			d='M16 4 4 16v3.195c0 .297.359.446.569.236l4.488-4.488c.52-.52 1.365-.52 1.886 0L16 20h3.195a.333.333 0 0 0 .236-.569l-6.488-6.488a1.333 1.333 0 0 1 0-1.886L19.43 4.57A.333.333 0 0 0 19.195 4H16ZM11.862 4H5.333C4.597 4 4 4.597 4 5.333v6.529c0 .297.359.446.569.236l7.529-7.529A.333.333 0 0 0 11.862 4Z'
			fill='currentColor'
		/>
		<path
			d='m9.293 18.04-1.106 1.106A.5.5 0 0 0 8.54 20h2.92a.5.5 0 0 0 .353-.854l-1.106-1.106a1 1 0 0 0-1.414 0Z'
			fill='#E73232'
		/>
	</svg>
)
export default SvgLogoSquareOutlined
