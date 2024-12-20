"use client"
import { ProductCardLikeIcon, ProductCardSearchIcon, ProductCardShopIcon } from "@/assets/image/icon"
import { Context } from "@/context/AuthContext"
import { instance } from "@/hooks/instance"
import { ProductType } from "@/service/getProducts"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import Image from "next/image"
import React, { useContext } from "react"

const ProductCard: React.FC<{ item: ProductType }> = ({ item }) => {
	const queryClient = useQueryClient()
	const { token } = useContext(Context)

	// Like part start
	const likeMutation = useMutation({
		mutationFn: (id: string) => instance().post(`/like/${id}`, {}, {
			headers: { "Authorization": `Bearer ${token}` }
		}),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["products"] })
		}
	})
	function handleProductLikeBtnClick(id: string) {
		if (!token) {
			alert("Like ni bosish uchun Login dan otish kerak!")
		} else {
			likeMutation.mutate(id)
		}
	}
	// Like part end

	// Basket part start
	const basketMutation = useMutation({
		mutationFn: (data: { productId: string }) => instance().post(`/basket`, data, {
			headers: { "Authorization": `Bearer ${token}` }
		}),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["products"] })
			queryClient.invalidateQueries({ queryKey: ["basket_list"] })
		}
	})
	function handleProductBasketBtnClick(productId: string) {
		if (!token) {
			alert("Basket ni bosish uchun Login dan otish kerak!")
		} else {
			const data = { productId }
			basketMutation.mutate(data)
		}
	}
	// Basket part end

	return (
		<div className="!w-[250px] border-t-[1px] border-transparent duration-500 hover:border-[#46A358] mb-[40px]">
			<div className="mb-[12px] card-img-d">
				<Image className="card-img" style={{ width: "auto", height: "auto" }} priority src={item.image_url ? item.image_url[0] : "/images/flower.jpg"} alt={"Product img"} width={250} height={250} />
				<div className="flex items-center justify-center gap-[10px] h-[36px] card-btn-d">
					<button onClick={() => handleProductBasketBtnClick(item.product_id)} className={`text-[#3D3D3D] duration-300 p-[8px] rounded-[5px] flex items-center justify-center border-[1px] border-transparent hover:border-[#46A358] bg-white ${item.basket && "text-[#46A358]"}`}><ProductCardShopIcon /></button>
					<button onClick={() => handleProductLikeBtnClick(item.product_id)} className={`text-[#3D3D3D] duration-300 p-[8px] rounded-[5px] flex items-center justify-center border-[1px] border-transparent hover:border-[#46A358] bg-white ${item.liked && "text-red-500"}`}><ProductCardLikeIcon /></button>
					<button className="text-[#3D3D3D] duration-300 hover:text-[#46A358] p-[8px] rounded-[5px] flex items-center justify-center border-[1px] border-transparent hover:border-[#46A358] bg-white"><ProductCardSearchIcon /></button>
				</div>
				<div className="card-content-d">
					<h2 className="mb-[10px] text-[16px] text-[#3D3D3D] font-normal leading-[16px]">{item.product_name}</h2>
					<div className="flex items-center gap-[16px]">
						<strong className="text-[#46A358] text-[18px] font-bold leading-[16px]">${item.count}</strong>
						{item.discount && <strong className="text-[18px] font-normal leading-[16px]"><del>${item.discount}</del></strong>}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductCard