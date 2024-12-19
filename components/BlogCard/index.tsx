import { FooterRightIcon } from "@/assets/image/icon"
import Image from "next/image"
import React from "react"

interface BlogCardType {
	img: string,
	span: string,
	title: string,
	text: string
}

const BlogCard:React.FC<BlogCardType> = ({img, span, title, text}) => {
	return (
		<div className="w-[268px] blog-card bg-[#FBFBFB]">
			<Image style={{width: "auto", height: "auto"}} src={img} alt={"blog img"} width={268} height={195}/>
			<div className="px-[13px] py-[10px] text-left">
				<span className="mb-[5px] text-[#46A358] text-[14px] font-medium leading-[16px]">{span}</span>
				<h4 className="mb-[5px] text-[20px] text-[#3D3D3D] font-bold leading-[26px]">{title}</h4>
				<p className="mb-[10px] text-[#727272] text-[14px] font-normal leadng-[22px]">{text}</p>
				<button className="outline-none border-none text-[#3D3D3D] text-[14px] font-medium flex items-center leading-[16px] duration-300">Read More <FooterRightIcon/></button>
			</div>
		</div>
	)
}

export default BlogCard
