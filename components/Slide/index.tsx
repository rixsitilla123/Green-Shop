import Image from 'next/image'
import React from 'react'
import Button from '../Button'

const Slide = ({item}) => {
	return (
		<div className={`flex items-center justify-between`}>
			<div className="pt-[68px] pl-[43px] pb-[45px] w-[602px]">
				<strong className="text-[#3D3D3D] mb-[7px] text-[14px] font-medium leading-[16px] tracking-[10%]">{item.strong}</strong>
				<h1 className="text-[#3D3D3D] mb-[7px] text-[70px] font-black leading-[70px] uppercase">{item.h1}<span className="text-[#46A358]">{item.h1Span}</span></h1>
				<p className="mb-[45px] text-[#727272] text-[14px] font-normal leading-[24px]">{item.p}</p>
				<Button title="shop now" type="button" extraStyle="py-[10px] px-[26px] uppercase" />
			</div>
			<Image className="object-contain" style={{ width: "auto", height: "450px" }} src={item.img} alt="hero img" priority width={518} height={450} />
		</div>
	)
}

export default Slide
