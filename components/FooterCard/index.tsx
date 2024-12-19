import Image from 'next/image'
import React from 'react'

interface FooterCardType {
	img: string,
	title: string
}

const FooterCard:React.FC<FooterCardType> = ({img, title}) => {
	return (
		<div className='w-[200px]'>
			<Image style={{width: "auto", height: "auto"}} src={img} alt={"footer card img"} width={150} height={150}/>
			<strong className="mt-[15px] mb-[10px] text-[#3D3D3D] text-[17px] font-bold leading-[16px]">{title}</strong>
			<p className="text-[#727272] text-[14px] font-normal leadinh-[16px]">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
		</div>
	)
}

export default FooterCard
