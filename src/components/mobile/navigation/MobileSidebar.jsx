'use client'
import { categories } from "@/constant/data"
import { ToggleContext } from "@/provider/contextProvider"
import Image from 'next/image'
import { useContext } from "react"
import { BsPersonCircle } from "react-icons/bs"

function MobileSidebar() {
    const { data, setData } = useContext(ToggleContext)
    return (
        <>
            <label
                onClick={() => setData(s => ({ ...s, mobileSidebar: !s.mobileSidebar }))}
                className="fixed  h-screen z-[59] top-0  w-full bg-black bg-opacity-20 lg:hidden"
            ></label>
            {/* mobile sidebar */}
            <div className="fixed animate-popup origin-left h-screen z-[60] -top-1 left-0 w-fit bg-white duration-200 lg:hidden ">
                <div className="w-full h-fit p-3 bg-slate-100">
                    <div className="px-3 py-1 rounded-xl flex items-center gap-3">
                        <BsPersonCircle className="text-slate-500" size="1.5em" />
                        <p className="text-sm font-semibold">User Name</p>
                    </div>
                </div>
                <div className="w-full h-full pl-2 pr-5 pt-4 bg-white">
                    <ul className="space-y-2">
                        {
                            categories.map((item, i) => {
                                return (
                                    <li key={i} className="flex gap-2 items-center cursor-pointer px-3 py-2 rounded hover:bg-slate-100">
                                        <Image
                                            src={item.image}
                                            alt="icons"
                                            width={25}
                                            height={25}
                                        />
                                        <h3 className="text-sm">{item.name}</h3>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MobileSidebar