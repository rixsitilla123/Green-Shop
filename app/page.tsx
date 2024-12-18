"use client"
import { DownArrow } from "@/assets/image/icon";
import ProductCard from "@/components/ProductCard";
import Slide from "@/components/Slide";
import SummerSection from "@/components/SummerSection";
import { CategoryType, getCategories } from "@/service/getCategories";
import { ProductType, getProducts } from "@/service/getProducts";
import { Pagination } from "@nextui-org/pagination";
import React, { useState, useEffect } from 'react';

interface SliderType {
	id: number,
	strong: string,
	h1: string,
	h1Span: string,
	p: string,
	img: string
}

export default function Home() {
	const [categoryName, setCategoryName] = useState<string | null>(null)
	const [tags, setTags] = useState<string | null>(null)
	const [page, setPage] = useState<number>(1)
	const [totalPage, setTotalPage] = useState<number>(10)

	const categories: CategoryType[] = getCategories()
	const products: ProductType[] = getProducts(categoryName, tags, page, setTotalPage)

	const SliderList: SliderType[] = [
		{
			id: 1,
			strong: "Welcome to GreenShop",
			h1: "Let’s Make a Better",
			h1Span: "Planet",
			p: "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
			img: "/HeroImg.jpg"
		}
	]

	return (
		<main>
			<div className="container1">
				<section className="hero">
					{SliderList.map((item: SliderType) => <Slide key={item.id} item={item} />)}
				</section>
				<section className="flex gap-[50px] justify-between mt-[45px] mb-[95px]">
					<div className="w-[25%] h-[100vh] py-[16px] px-[21px] bg-[#FBFBFB]">
						<h3 className="mb-[15px] text-[#3D3D3D] text-[18px] font-bold leading-[16px]">Categories</h3>
						<div className="space-y-[10px] pl-[13px]">
							{[{ category_name: "All", category_id: null }, ...categories].map((item: CategoryType) => (
								<div key={item.category_id} className={`${categoryName == item.category_name ? "text-[#46A358]" : "text-[#3D3D3D]"} cursor-pointer`} onClick={() => setCategoryName(item.category_name)}><span className={`text-[15px] font-normal leading-[40px] cursor-pointer`}>{item.category_name}</span></div>
							))}
						</div>
					</div>
					<div className="w-[75%]">
						<div className="mb-[32px] flex items-center justify-between">
							<ul className="flex items-center space-x-[38px]">
								<li onClick={() => setTags(null)} className={`${tags == null ? "text-[#46A358] border-[#46A358]" : "text-[#3D3D3D] border-transparent"} text-[15px] font-normal leading-[16px] pb-[6px] border-b-[1px] cursor-pointer`}>All Plants</li>
								<li onClick={() => setTags("new-arrivals")} className={`${tags == "new-arrivals" ? "text-[#46A358] border-[#46A358]" : "text-[#3D3D3D] border-transparent"} text-[15px] font-normal leading-[16px] pb-[6px] border-b-[1px] cursor-pointer`}>New Arrivals</li>
								<li onClick={() => setTags("sale")} className={`${tags == "sale" ? "text-[#46A358] border-[#46A358]" : "text-[#3D3D3D] border-transparent"} text-[15px] font-normal leading-[16px] pb-[6px] border-b-[1px] cursor-pointer`}>Sale</li>
							</ul>
							<div className="flex items-center gap-[9px]">
								<p className="text-[#3D3D3D] text-[15px] font-normal leading-[16px]">Short by: Default sorting</p>
								<span className="cursor-pointer"><DownArrow /></span>
							</div>
						</div>
						<div className="flex items-center justify-between flex-wrap gap-[40px]">
							{products ? products.map((item: ProductType) => <ProductCard key={item.product_id} item={item} />) : "Empty..."}
						</div>
						<div className="flex justify-end mt-[90px]">
							<Pagination onChange={(e) => setPage(e)} classNames={{
								wrapper: "gap-[10px] rounded-[4px]", item: "text-[18px] text-[#3D3D3D] font-thin leading-[16px] bg-transparent border border-[#E5E5E5]",
								cursor: "bg-[#46A358] shadow-lg from-default-500 to-default-800 dark:from-default-300 dark:to-default-100"
							}} initialPage={page} total={totalPage / 6} />
						</div>
					</div>
				</section>
				<section className="mb-[140px] flex items-center justify-between">
					<SummerSection title="summer cactus & succulents" img="/SummerImg1.png"/>
					<SummerSection title="Styling trends & much more" img="/SummerImg2.png"/>
				</section>
			</div>
		</main>
	);
}