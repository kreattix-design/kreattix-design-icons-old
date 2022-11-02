import * as React from 'react'
import { SVGProps } from 'react'
const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width='1em'
		height='1em'
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='M18 0 0 18v4.793a.5.5 0 0 0 .854.353l6.732-6.732a2 2 0 0 1 2.828 0L18 24h4.793a.5.5 0 0 0 .353-.854l-9.732-9.732a2 2 0 0 1 0-2.828L23.146.854A.5.5 0 0 0 22.793 0H18ZM11.793 0H2a2 2 0 0 0-2 2v9.793a.5.5 0 0 0 .854.353L12.146.854A.5.5 0 0 0 11.793 0Z'
			fill='currentColor'
		/>
		<path
			d='m8.293 20.707-2.44 2.44a.5.5 0 0 0 .354.853h5.586a.5.5 0 0 0 .353-.854l-2.439-2.439a1 1 0 0 0-1.414 0Z'
			fill='#E73232'
		/>
	</svg>
)
export default SvgLogo
