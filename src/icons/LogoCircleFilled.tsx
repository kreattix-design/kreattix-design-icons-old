import * as React from 'react'
import { SVGProps } from 'react'
const SvgLogoCircleFilled = (props: SVGProps<SVGSVGElement>) => (
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
			d='M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Zm-8.5-7L5 15.5v2.796c0 .26.314.39.498.206l3.927-3.927a1.167 1.167 0 0 1 1.65 0L15.5 19h2.796c.26 0 .39-.314.206-.498l-5.677-5.677a1.167 1.167 0 0 1 0-1.65l5.677-5.677A.292.292 0 0 0 18.296 5H15.5Zm-3.62 0H6.166C5.522 5 5 5.522 5 6.167v5.712c0 .26.314.39.498.206l6.587-6.587A.292.292 0 0 0 11.88 5ZM8.77 18.146l.773-.772a1 1 0 0 1 1.414 0l.773.772a.5.5 0 0 1-.354.854H9.124a.5.5 0 0 1-.354-.854Z'
			fill='currentColor'
		/>
		<path
			d='m9.546 17.377-.772.773a.5.5 0 0 0 .353.853h2.253a.5.5 0 0 0 .353-.853l-.773-.773a1 1 0 0 0-1.414 0Z'
			fill='#E73232'
		/>
	</svg>
)
export default SvgLogoCircleFilled
