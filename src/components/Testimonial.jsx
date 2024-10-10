import { FaTwitter } from "react-icons/fa";
import { testimonial } from "../../utils/data";
import img from '/public/user1.png'
import Image from "next/image";

export default function Testimonial() {
    return (
        <section className="h-full w-full pt-10">
            <h2 className="text-5xl md:text-8xl font-extrabold text-center text-[#FFFFFF]/[10%]">Wall of love</h2>
            <div className="flex justify-center items-center h-full flex-wrap w-full gap-4 py-7">
                {testimonial?.map((item, index) => (
                    <div className="relative bg-[#000000]/[12%] w-full md:w-[20rem]  rounded-md border-2 border-[#FFFFFF]/[50%] p-5" key={index}>
                        <div className="flex justify-between gap-2 ">
                            <div className="flex gap-2">
                                <Image src={item.img_url} className="" alt="JS" />
                                <div className="">
                                    <span className="text-sm font-bold">{item.name}</span>
                                    <p className="text-sm font-bold">{item.email}</p>
                                </div>
                            </div>
                            <span><FaTwitter size={20} color="white" /></span>
                        </div>
                        <p className="pt-3 pb-7 capitalize font-medium ">{item.message}</p>
                        <p className="absolute bottom-4 left-5 text-sm">{item.date}</p>
                    </div>
                ))
                }
            </div>
        </section>
    )
}
