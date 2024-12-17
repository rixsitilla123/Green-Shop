import { FacebookIcon, GoogleIcon } from "@/assets/images/icon"

const LoginBottomPart = () => {
	return (
		<div className="mt-[45px]">
			<div className="flex items-center justify-center gap-[10px] mb-[25px]">
				<span className="w-[100px] h-[1px] bg-[#EAEAEA] inline-block"></span>
				<p className="text-[#3D3D3D] text-[13px] font-normal leading-[16px] block">Or login with</p>
				<span className="w-[100px] h-[1px] bg-[#EAEAEA] inline-block"></span>
			</div>
			<button type="button" className="bg-white border-[1px] border-[#EAEAEA] rounded-[5px] mb-[15px] py-[10px] w-full text-center flex items-center justify-center gap-[10px]">
				<GoogleIcon/>
				<span className="text-[#727272] text-[13px] font-medium leading-[16px]">Login with Google</span>
			</button>
			<button type="button" className="bg-white border-[1px] border-[#EAEAEA] rounded-[5px] py-[10px] w-full text-center flex items-center justify-center gap-[10px]">
				<FacebookIcon/>
				<span className="text-[#727272] text-[13px] font-medium leading-[16px]">Login with Facebook</span>
			</button>
		</div>
	)
}

export default LoginBottomPart
