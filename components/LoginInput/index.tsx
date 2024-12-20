"use client"
import React, { SetStateAction } from "react"
import Button from "../Button"
import Input from "../Input"
import LoginBottomPart from "../LoginBottomPart"

interface LoginType {
	setIsLogin: React.Dispatch<SetStateAction<"login" | "register" | "verifyRegister" | "forgotPassword" | "resetPassword">>
}

const LoginInput: React.FC<LoginType> = ({setIsLogin}) => {
	return (
		<>
			<p className="mb-[14px] text-[#3D3D3D] text-[14px] font-normal leading-[16px]">Enter your username and password to login.</p>
			<Input name="email" type="email" placeholder="almamun_uxui@outlook.com" extraStyle="mb-[17px]" />
			<Input name="password" type="password" placeholder="***********" />
			<p onClick={() => setIsLogin("resetPassword")} className="text-[#46A358] text-[14px] font-normal leading-[16px] cursor-pointer mt-[14px] flex items-center justify-end">Forgot Password?</p>
			<Button title="Login" type="submit" extraStyle="w-full py-[12px] text-center mt-[27px]" />
			<LoginBottomPart/>
		</>
	)
}

export default LoginInput