'use client'
import { useSession } from "next-auth/react"
import { IoLocationOutline } from 'react-icons/io5'

function UserInfo() {
    const { data, } = useSession()
    if (!data) {
        return <div className="cursor-pointer hover:outline flex flex-col justify-center rounded-sm outline-teal-400 p-[2px]">
            <div className="font-semibold items-center gap-1 flex text-sm text-teal-600 text-center">
                <IoLocationOutline className=" text-gray-600" />
                <span>Deliver </span>
            </div>
            <span className="font-semibold text-sm text-teal-600 text-center">All Bangladesh</span>
        </div>
    } else {
        const { user } = data
        return (
            <div
                className=" cursor-pointer hover:outline rounded-sm outline-teal-400 p-[2px] ">
                <p className="font-semibold text-sm text-slate-600">
                    Deliver to <span className="font-bold text-teal-600">{user?.name}</span>
                </p>
                <div className="flex items-center">
                    <IoLocationOutline className=" text-gray-600" />
                    <p className="font-bold text-sm text-teal-500">
                        Lalmonirhat, Rangpur...
                    </p>
                </div>
            </div>
        )
    }
}

export default UserInfo