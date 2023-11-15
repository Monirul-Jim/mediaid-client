'use client'
import { ToggleContext } from '@/provider/contextProvider'
import { useContext } from 'react'

function CategoryButton() {
    const { setData, data } = useContext(ToggleContext)
    return (
        <button
            onClick={() => setData(s => ({ ...s, sidebarCollapse: !s.sidebarCollapse }))}
            className="w-full h-full text-left flex items-center gap-2 pl-4"
        >
            <div className='relative w-5 h-4'>
                <span className={`w-5 h-[2px] bg-slate-600  transition-all block absolute ${data.sidebarCollapse ? "rotate-45 top-[43%]" : "top-0  "}`}></span>
                <span className={`w-5 h-[2px] bg-slate-600  transition-all top-2/4 -translate-y-2/4 absolute ${data.sidebarCollapse ? "hidden" : "block"}`}></span>
                <span className={`w-5 h-[2px] bg-slate-600  transition-all block absolute ${data.sidebarCollapse ? "-rotate-45  bottom-[43%]" : "bottom-0"} `}></span>
            </div>
            <p className="font-semibold">{'path' == '/shop' ? "Filter & Categories" : "Categories"}</p>
        </button>
    )
}

export default CategoryButton