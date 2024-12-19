"use client"
import { Context } from "@/context/AuthContext"
import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"
import { SetStateAction, useContext } from "react"

export interface ProductType {
	basket: boolean,
	category_id: string,
	cost: number,
	count: number,
	discount: number,
	image_url: string[],
	liked: boolean,
	product_description: string,
	product_id: string,
	product_name: string,
	product_status: string,
	short_description: string,
	size: string[],
	tags: string[]
}

interface ParamsType {
	page: number,
	limit: number,
	category: string | null,
	tags: string | null,
	min_price: number,
	max_price: number,
	size: string | null
}

export const getProducts = (category_name: string | null, tags: string | null, page: number, setTotalPage: React.Dispatch<SetStateAction<number>>, fullPrice: number[], size: string | null) => {
	const { token } = useContext(Context)
	const params: ParamsType = {
		page,
		limit: 6,
		category: category_name == "All" ? null : category_name,
		tags: tags,
		min_price: fullPrice[0],
		max_price: fullPrice[1],
		size
	}

	const { data = [] } = useQuery({
		queryKey: ["products", category_name, tags, page, fullPrice, size],
		enabled: true,
		queryFn: () => instance().get("/products", {
			headers:token ? {"Authorization":`Bearer ${token}`} : {},
			params:params
		}).then((res) => {
			setTotalPage(res.data.total_count)
			return res.data.products
		})
	})
	return data
} 