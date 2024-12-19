import React from 'react'
import FooterCard from './FooterCard'
import Link from 'next/link'
import { FooterLocationIcon, FooterMessageIcon, FooterPhoneIcon, FooterSocialIcon1, FooterSocialIcon2, FooterSocialIcon3, FooterSocialIcon4, FooterSocialIcon5, Logo } from '@/assets/image/icon'
import FooterItem from './FooterItem'
import Image from 'next/image'

interface FooterItemType {
	id: number,
	title: string,
	text1: string,
	text2: string,
	text3: string,
	text4: string,
	text5: string
}

const Footer = () => {
	const footerItem1: FooterItemType[] = [
		{
			id: 1,
			title: "My Account",
			text1: "My Account",
			text2: "Our stores",
			text3: "Contact us",
			text4: "Career",
			text5: "Specials"
		}
	]
	const footerItem2: FooterItemType[] = [
		{
			id: 2,
			title: "Help & Guide",
			text1: "Help Center",
			text2: "How to Buy",
			text3: "Shipping & Delivery",
			text4: "Product Policy",
			text5: "How to Return"
		}
	]
	const footerItem3: FooterItemType[] = [
		{
			id: 3,
			title: "Categories",
			text1: "House Plants",
			text2: "Potter Plants",
			text3: "Seeds",
			text4: "Small Plants",
			text5: "Accessories"
		}
	]
	return (
		<footer className=''>
			<div className="container1 bg-[#FBFBFB]">
				<div className="p-[23px] flex items-center justify-between">
					<div className="flex items-center gap-[30px]">
						<FooterCard img='/FooterImg1.png' title="Garden Care" />
						<span className="inline-block width-[3px] h-[195px] text-slate-600"></span>
						<FooterCard img='/FooterImg2.png' title="Plant Renovation" />
						<span className="inline-block width-[3px] h-[195px] text-slate-600"></span>
						<FooterCard img='/FooterImg3.png' title="Watering Graden" />
					</div>
					<div className="w-[350px] text-left">
						<strong className="text-[#3D3D3D] text-[18px] font-bold leading-[16px]">Would you like to join newsletters?</strong>
						<div className="flex items-center mb-[17px] mt-[18px]">
							<input type="text" className="rounded-l-[6px] outline-none w-full bg-white shadow-[0,0,20px,0_rgba(0,0,0,0.06)] p-[12px] text-[#ACACAC] text-[14px] font-normal leading-[16px]" placeholder="enter your email address..." />
							<button type="button" className="py-[12px] px-[25px] rounded-r-[6px] bg-[#46A358] text-[18px] text-white font-bold leading-[16px]">Join</button>
						</div>
						<p className="text-[#727272] text-[13px] font-normal leading-[22px]">We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
					</div>
				</div>
				<div className="py-[28px] px-[23px] bg-[#ECF6EE] flex items-center justify-between">
					<Link className='mr-[90px]' href={"/"}><Logo /></Link>
					<div className="flex items-center gap-[12px] mr-[62px]">
						<FooterLocationIcon />
						<p className="w-[170px] text-[#3D3D3D] text-[14px] font-normal leading-[22px]">70 West Buckingham Ave.Farmingdale, NY 11735</p>
					</div>
					<div className="flex items-center gap-[12px]">
						<FooterMessageIcon />
						<p className="text-[#3D3D3D] text-[14px] font-normal leading-[22px]">contact@greenshop.com</p>
					</div>
					<Link className="flex items-center gap-[12px]" href="tel:+8801911717490">
						<FooterPhoneIcon />
						<p className="text-[#3D3D3D] text-[14px] font-normal leading-[22px]">+88 01911 717 490</p>
					</Link>
				</div>
				<div className="px-[23px] pt-[32px] pb-[27px] flex items-center justify-between">
					<div className="">
						{footerItem1.map((item: FooterItemType) => (
							<FooterItem key={item.id} item={item} />
						))}
					</div>
					<div className="">
						{footerItem2.map((item: FooterItemType) => (
							<FooterItem key={item.id} item={item} />
						))}
					</div>
					<div className="">
						{footerItem3.map((item: FooterItemType) => (
							<FooterItem key={item.id} item={item} />
						))}
					</div>
					<div className="">
						<strong className="text-[#3D3D3D] text-[18px] font-bold leading-[16px]">Social Media</strong>
						<div className="flex items-center gap-[10px] mt-[20px] mb-[33px]">
							<button className="p-[8px] border-[1px] border-[rgba(70,163,88,0.2)] rounded-[4px] flex items-center justify-center"><FooterSocialIcon1/></button>
							<button className="p-[8px] border-[1px] border-[rgba(70,163,88,0.2)] rounded-[4px] flex items-center justify-center"><FooterSocialIcon2/></button>
							<button className="p-[8px] border-[1px] border-[rgba(70,163,88,0.2)] rounded-[4px] flex items-center justify-center"><FooterSocialIcon3/></button>
							<button className="p-[8px] border-[1px] border-[rgba(70,163,88,0.2)] rounded-[4px] flex items-center justify-center"><FooterSocialIcon4/></button>
							<button className="p-[8px] border-[1px] border-[rgba(70,163,88,0.2)] rounded-[4px] flex items-center justify-center"><FooterSocialIcon5/></button>
						</div>
						<strong className="text-[#3D3D3D] text-[18px] font-bold leading-[16px]">We accept</strong>
						<Image className='mt-[13px]' style={{width: "auto", height: "auto"}} src="/FooterSocialMedia.png" alt="footer img" width={224} height={26}/>
					</div>
				</div>
				<hr />
				<div className="mx-auto text-center py-[10px]">
					<span className="text-[#3D3D3D] text-[14px] font-normal leading-[16px]">© 2024 GreenShop. All Rights Reserved.</span>
				</div>
			</div>
		</footer>
	)
}

export default Footer