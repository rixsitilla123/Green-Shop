"use client"
import React, { useContext } from "react"
import { LoginIcon, Logo, ProductCardLikeIcon, ProductCardSearchIcon, ProductCardShopIcon } from "@/assets/image/icon"
import Button from "./Button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Modal from "./Modal"
import { FormEvent, useState } from "react"
import { instance } from "@/hooks/instance"
import LoginInput from "./LoginInput"
import RegisterInput from "./RegisterInput"
import VerifyRegister from "./RegisterInput/VerifyRegister"
import ForgotPassword from "./ForgotPassword"
import ResetPassword from "./ResetPassword"
import { Context } from "@/context/AuthContext"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { Badge } from "@nextui-org/badge"

interface NavbarType {
	id: number,
	title: string,
	path: string
}

const Header = () => {
	const { token } = useContext(Context)
	const queryClient = useQueryClient()
	const { setToken } = useContext(Context)
	const path = usePathname()
	const [registerEmail, setRegisterEmail] = useState<string>("")
	const [loginModal, setLoginModal] = useState<boolean>(false)
	const [isLogin, setIsLogin] = useState<"login" | "register" | "verifyRegister" | "forgotPassword" | "resetPassword">("login")

	const navbarItem: NavbarType[] = [
		{
			id: 1,
			title: "Home",
			path: "/"
		}, {
			id: 2,
			title: "Shop",
			path: "/shop"
		}, {
			id: 3,
			title: "Plant Care",
			path: "/plant"
		}, {
			id: 4,
			title: "Blogs",
			path: "/blog"
		},
	]

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		if (isLogin == "login") {
			const data = {
				password: (e.target as HTMLFormElement).password.value,
				usernameoremail: (e.target as HTMLFormElement).email.value
			}
			instance().post("/login", data).then((res) => {
				setLoginModal(false)
				setToken(res.data.access_token)
				queryClient.invalidateQueries({ queryKey: ["products"] })
			})
		} else if (isLogin == "register") {
			const data = {
				firstName: (e.target as HTMLFormElement).username.value,
				lastName: (e.target as HTMLFormElement).username.value,
				email: (e.target as HTMLFormElement).email.value,
				password: (e.target as HTMLFormElement).password.value
			}
			if ((e.target as HTMLFormElement).password.value == (e.target as HTMLFormElement).confirm_password.value) {
				instance().post("/register", data).then(() => {
					setRegisterEmail(data.email)
					setIsLogin("verifyRegister")
				})
			} else {
				alert("Password must be same!")
			}
		} else if (isLogin == "verifyRegister") {
			const data = {
				email: registerEmail,
				code: (e.target as HTMLFormElement).code.value
			}
			instance().post("/users/verify", {}, {
				params: data
			}).then(res => setIsLogin("login"))
		} else if (isLogin == "forgotPassword") {
			const email = (e.target as HTMLFormElement).email.value
			instance().post(`/forgot/${email}`, {}).then(res => {
				setRegisterEmail(email)
				setIsLogin("resetPassword")
			})
		} else if (isLogin == "resetPassword") {
			const data = {
				email: registerEmail,
				new_password: (e.target as HTMLFormElement).password.value,
				otp: (e.target as HTMLFormElement).otp.value
			}
			instance().put("/reset-password", data).then(res => setIsLogin("login"))
		}
	}

	// Like saved part start
	// const getLikeList = async () => {
	// 	const data = await instance().get("/wishlist", {
	// 		headers: {"Authorization" : `Bearer ${token}`},
	// 		params: { page: 1, limit: 1000 }
	// 	}).then(res => res.data.ProductId)
	// 	return data
	// }
	// const { data:LikeProducts = [] } = useQuery({
	// 	queryKey: ["liked_list"],
	// 	queryFn: () => token ? getLikeList() : {}
	// })
	// Like saved part end

	// Basket saved part start
	const { data: BasketProducts = [] } = useQuery({
		queryKey: ["basket_list"],
		queryFn: () => token ? instance().get("/basket", {
			headers: { "Authorization": `Bearer ${token}` },
			params: { page: 1, limit: 10000 }
		}).then(res => res.data.ProductId) : []
	})
	// Basket saved part end

	return (
		<header className="mb-[12px]">
			<div className="container1 flex items-center justify-between border-b-[1px] border-[#EEF7F0]">
				<Link href={"/"}><Logo /></Link>
				<div className="flex items-center gap-[50px]">
					{navbarItem.map((item: NavbarType) => (
						<Link className={`py-[25px] text-[#3D3D3D] text-[16px] leading-[20px] border-b-[2px] ${item.path == path ? "font-bold border-[#46A358]" : "border-transparent font-normal"}`} key={item.id} href={item.path}>{item.title}</Link>
					))}
				</div>
				<div className="flex items-center gap-[30px]">
					<button className="text-[#3D3D3D] duration-300 hover:text-[#46A358]"><ProductCardSearchIcon /></button>
					<button className="text-[#3D3D3D] duration-300 hover:text-[#46A358]"><Badge color="success" className="text-white" content={""}><ProductCardLikeIcon /></Badge></button>
					<button className="text-[#3D3D3D] duration-300 hover:text-[#46A358]"><Badge color="warning" className="text-white" content={token ? (BasketProducts.length ? BasketProducts.length : "")  : ""}><ProductCardShopIcon /></Badge></button>
					<Button onClick={() => setLoginModal(true)} title="Login" leftIcon={<LoginIcon />} extraStyle="py-[7px] px-[17px]" type="button" />
				</div>
				<Modal isOpen={loginModal} setIsOpen={setLoginModal} width={500}>
					<ul className="mb-[55px] flex items-center justify-center gap-[10px]">
						<li onClick={() => setIsLogin("login")} className={`${isLogin == "login" && "text-[#46A358]"} text-[#3D3D3D] text-[20px] font-medium leading-[16px] cursor-pointer`}>Login</li>
						<li className="w-[1px] h-[16px] bg-[#3D3D3D]"></li>
						<li onClick={() => setIsLogin("register")} className={`${isLogin == "register" && "text-[#46A358]"} text-[#3D3D3D] text-[20px] font-medium leading-[16px] cursor-pointer`}>Register</li>
					</ul>
					<form onSubmit={handleSubmit}>
						{isLogin == "login" && <LoginInput setIsLogin={setIsLogin} />}
						{isLogin == "register" && <RegisterInput />}
						{isLogin == "verifyRegister" && <VerifyRegister registerEmail={registerEmail} />}
						{isLogin == "forgotPassword" && <ForgotPassword />}
						{isLogin == "resetPassword" && <ResetPassword />}
					</form>
				</Modal>
			</div>
		</header>
	)
}

export default Header