"use client"
import { DownArrow } from "@/assets/image/icon";
import BlogCard from "@/components/BlogCard";
import ProductCard from "@/components/ProductCard";
import Carusel from "@/components/Slide/Carusel";
import SummerSection from "@/components/SummerSection";
import debounce from "@/hooks/debounce";
import { CategoryType, getCategories } from "@/service/getCategories";
import { ProductType, getProducts } from "@/service/getProducts";
import { Pagination } from "@nextui-org/pagination";
import { Slider } from "@nextui-org/slider";
import React, { useState } from 'react';

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
	const [price, setPrice] = useState<number[] | number>([39, 1230])
	const [size, setSize] = useState<string | null>(null)
	const fullPrice = debounce(price, 1000)

	const categories: CategoryType[] = getCategories()
	const products: ProductType[] = getProducts(categoryName, tags, page, setTotalPage, fullPrice, size)

	const SliderList: SliderType[] = [
		{
			id: 1,
			strong: "Welcome to GreenShop",
			h1: "Let’s Make a Better",
			h1Span: "Planet",
			p: "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
			img: "/HeroImg.png"
		}
	]

	return (
		<main>
			<div className="container1">
				<section className="hero">
					{SliderList.map((item: SliderType) => <Carusel key={item.id} item={item} />)}
				</section>
				<section className="flex gap-[50px] justify-between mt-[45px] mb-[95px]">
					<div className="w-[25%] h-[100%] py-[16px] px-[21px] bg-[#FBFBFB]">
						<h3 className="mb-[15px] text-[#3D3D3D] text-[18px] font-bold leading-[16px]">Categories</h3>
						<div className="space-y-[10px] pl-[13px] mb-[36px]">
							{[{ category_name: "All", category_id: null }, ...categories].map((item: CategoryType) => (
								<div key={item.category_id} className={`${categoryName == item.category_name ? "text-[#46A358]" : "text-[#3D3D3D]"} cursor-pointer`} onClick={() => setCategoryName(item.category_name)}><span className={`text-[15px] font-normal leading-[40px] cursor-pointer`}>{item.category_name}</span></div>
							))}
						</div>
						<div className="mb-[46px]">
							<h3 className="mb-[20px] text-[#3D3D3D] text-[18px] font-bold leading-[16px] bg-[#FBFBFB]">Price Range</h3>
							<Slider className="max-w-md"
								onChange={(e) => setPrice(e)}
								defaultValue={[39, 1230]}
								formatOptions={{ style: "currency", currency: "USD" }}
								label="Price:"
								maxValue={1230}
								minValue={39}
								step={2}
								size="sm"
							/>
						</div>
						<div className="mb-[20px] bg-[#FBFBFB]">
							<h3 className="mb-[20px] text-[#3D3D3D] text-[18px] font-bold leading-[16px]">Size</h3>
							<div className="pl-[15px]">
								<p onClick={() => setSize("small")} className="text-[#3D3D3D] text-[15px] font-normal leading-[40px]">Small</p>
								<p onClick={() => setSize("medium")} className="text-[#3D3D3D] text-[15px] font-normal leading-[40px]">Medium</p>
								<p onClick={() => setSize("large")} className="text-[#3D3D3D] text-[15px] font-normal leading-[40px]">Large</p>
							</div>
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
				<section className="my-[140px] mt-[150px] flex items-center justify-between gap-[40px]">
					<SummerSection title="summer cactus & succulents" img="/SummerImg1.png" />
					<SummerSection title="Styling trends & much more" img="/SummerImg.png" />
				</section>
				<section className="mb-[100px]">
					<div className="mx-auto text-center mb-[35px]">
						<h3 className="mb-[15px] text-[30px] text-[#3D3D3D] fon-bold leading-[16px]">Our Blog Posts</h3>
						<p className="text-[#727272] text-[14px] font-normal 24px">We are an online plant shop offering a wide range of cheap and trendy plants. </p>
					</div>
					<div className="flex items-center justify-between gap-[42px]">
						<BlogCard img="/BlogImg3.png" span="September 12  I Read in 6 minutes" title="Cactus & Succulent CareTips" text="Cacti are succulents are easy care plants for any home or patio. " />
						<BlogCard img="/BlogImg1.png" span="September 13  I Read in 2 minutes" title="Top 10 Succulents for Your Home" text="Best in hanging baskets. Prefers medium to high light." />
						<BlogCard img="/BlogImg2.png" span="September 15  I Read in 3 minutes" title="Cacti & Succulent Care Tips" text="Cacti and succulents thrive in containers and because most are.." />
						<BlogCard img="/BlogImg.png" span="September 15  I Read in 2 minutes" title="Best Houseplants Room by Room" text="The benefits of houseplants are endless. In addition to.." />
					</div>
				</section>
			</div>
		</main>
	);
}