import { FooterRightIcon } from "@/assets/image/icon"
import Image from "next/image"

interface SummerSectionType {
	title: string,
	img: string
}

const SummerSection: React.FC<SummerSectionType> = ({ title, img }) => {
	return (
		<div className="bg-[#FBFBFB] w-[585px] h-[215px] flex items-center justify-between relative z-0 summer-section-card pb-[20px] px-[30px]">
			<Image className="z-10 absolute top-[-100px] left-0" style={{ width: "auto", height: "auto" }} src={img} alt="plant img" width={260} height={260} priority/>
			<div className="w-[300px] pt-[40px] pb-[20px] text-right absolute right-[30px]">
				<div className="flex items-center justify-end mb-[12px]"><strong className="text-[#3d3d3d] text-[18px] font-bold leading-[18px] uppercase">{title}</strong></div>
				<p className="mb-[20px] text-[#6D6D6D] text-[14px] font-normal leading-[16px]">We are online plant shop offering a wide range of cheap and trendy plants</p>
				<div className="flex items-center justify-end">
					<button type="button" className={`bg-[#46A358] py-[10px] px-[20px] rounded-[6px] text-white flex items-center gap-[5px]`}>
						Find More
						<FooterRightIcon />
					</button>
				</div>
			</div>
		</div>
	)
}

export default SummerSection