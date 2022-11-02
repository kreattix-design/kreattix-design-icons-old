import * as React from 'react'
import { SVGProps } from 'react'
const SvgLogoSquareFilled = (props: SVGProps<SVGSVGElement>) => (
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
			d='M0 2.8A2.8 2.8 0 0 1 2.8 0h18.4A2.8 2.8 0 0 1 24 2.8v18.4a2.8 2.8 0 0 1-2.8 2.8H2.8A2.8 2.8 0 0 1 0 21.2V2.8ZM16 4 4 16v3.195c0 .297.359.446.569.236l4.488-4.488c.52-.52 1.365-.52 1.886 0L16 20h3.195a.333.333 0 0 0 .236-.569l-6.488-6.488a1.333 1.333 0 0 1 0-1.886L19.43 4.57A.333.333 0 0 0 19.195 4H16Zm-4.138 0H5.333C4.597 4 4 4.597 4 5.333v6.529c0 .297.359.446.569.236l7.529-7.529A.333.333 0 0 0 11.862 4ZM8.187 19.146l1.106-1.106a1 1 0 0 1 1.414 0l1.106 1.106a.5.5 0 0 1-.353.854H8.54a.5.5 0 0 1-.353-.854Z'
			fill='currentColor'
		/>
		<path
			d='m9.293 17.707-1.44 1.44a.5.5 0 0 0 .354.853h3.586a.5.5 0 0 0 .353-.854l-1.439-1.439a1 1 0 0 0-1.414 0Z'
			fill='#E73232'
		/>
	</svg>
)
export default SvgLogoSquareFilled
