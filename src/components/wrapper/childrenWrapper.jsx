'use client'

import { ToggleContext } from "@/provider/contextProvider"
import { useContext } from "react"
import Footer from "../footer/footer"
import Sidebar from "../sidebar/Sidebar"

function ChildrenWrapper({ children }) {
  const { data, setData } = useContext(ToggleContext)
  return (
    <div className="flex">
      <div className={`${data.sidebarCollapse ? "w-[80px]" : "w-[230px]"} min-h-screen transition-all  shadow-md relative overflow-hidden hidden lg:block`}>
        <Sidebar />
      </div>
      <div className={` ${data.sidebarCollapse ? "lg:w-[calc(100%-80px)]" : "lg:w-[calc(100%-230px)]"} transition-all w-full`}>
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default ChildrenWrapper