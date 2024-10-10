import Image from "next/image";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { data } from "../../utils/data";

export default function CoursesSection() {
    return (
        <section className="">
            <h2 className="text-5xl md:text-8xl font-extrabold text-center text-[#FFFFFF]/[10%]">New courses</h2>
            <div className="flex  xl:flex-row flex-col gap-4 py-7">
                {data?.map((item, index) => (
                    <div className="w-full bg-[#000000]/[12%] rounded-md border-2 border-[#FFFFFF]/[50%]" key={index}>
                        <div className="px-10 pt-14 pb-6">
                            <h2 className="font-bold pr-2 xl:pr-9 pb-5 text-5xl">{item.name}</h2>
                            <button className="flex gap-3 items-center">Learn more <span><LiaLongArrowAltRightSolid size={20} /></span></button>
                        </div>
                        <Image src={item.imgUrl} className={item.class} alt="JS" />
                    </div>
                ))
                }
            </div>
        </section>
    )
}
