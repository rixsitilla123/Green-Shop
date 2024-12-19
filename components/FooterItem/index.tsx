import React from 'react'

const FooterItem = ({item}) => {
	return (
		<div className='text-left'>
			<strong className="mb-[10px] text-[#3D3D3D] text-[18px] font-bold leading-[16px]">{item.title}</strong>
			<div className="mt-[10px] space-y-[10px]">
				<p className="text-[#3D3D3D] text-[14px] cursor-pointer font-normal leading-[16px] duration-300 hover:text-[#46A358]">{item.text1}</p>
				<p className="text-[#3D3D3D] text-[14px] cursor-pointer font-normal leading-[16px] duration-300 hover:text-[#46A358]">{item.text2}</p>
				<p className="text-[#3D3D3D] text-[14px] cursor-pointer font-normal leading-[16px] duration-300 hover:text-[#46A358]">{item.text3}</p>
				<p className="text-[#3D3D3D] text-[14px] cursor-pointer font-normal leading-[16px] duration-300 hover:text-[#46A358]">{item.text4}</p>
				<p className="text-[#3D3D3D] text-[14px] cursor-pointer font-normal leading-[16px] duration-300 hover:text-[#46A358]">{item.text5}</p>
			</div>
		</div>
	)
}

export default FooterItem
