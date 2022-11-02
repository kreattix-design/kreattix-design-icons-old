import * as React from 'react'
import { SVGProps } from 'react'
const SvgLogoCircleToned = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width='1em'
		height='1em'
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<circle
			cx={12}
			cy={12}
			r={11.3}
			fill='currentColor'
			fillOpacity={0.25}
			stroke='currentColor'
			strokeWidth={1.4}
		/>
		<path
			d='M15.5 5 5 15.5v2.796c0 .26.314.39.498.206l3.927-3.927a1.167 1.167 0 0 1 1.65 0L15.5 19h2.796c.26 0 .39-.314.206-.498l-5.677-5.677a1.167 1.167 0 0 1 0-1.65l5.677-5.677A.292.292 0 0 0 18.296 5H15.5ZM11.88 5H6.166C5.522 5 5 5.522 5 6.167v5.712c0 .26.314.39.498.206l6.587-6.587A.292.292 0 0 0 11.88 5Z'
			fill='currentColor'
		/>
		<path
			d='m9.543 17.374-.773.772a.5.5 0 0 0 .354.854h2.252a.5.5 0 0 0 .354-.854l-.773-.772a1 1 0 0 0-1.414 0Z'
			fill='#E73232'
		/>
	</svg>
)
export default SvgLogoCircleToned
