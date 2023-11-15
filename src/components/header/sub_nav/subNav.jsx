import Link from "next/link";
import { BiPhoneCall } from "react-icons/bi";
import { BsShopWindow } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { LiaFilePrescriptionSolid } from "react-icons/lia";
import CategoryButton from "../button/categoryButton";
const SubNav = () => {
    return (
        <div className="h-12 w-full -mt-2 grid grid-cols-12 border-y bg-slate-100 lg:px-3">
            <div className="col-start-1 col-end-3">
                <CategoryButton />
            </div>

            <div className="col-start-3 col-end-13 flex w-full justify-between">
                <div className="flex items-center gap-7">
                    <Link href="/dashboard">
                        <div className="cursor-pointer flex items-center gap-1 hover:outline outline-teal-400 rounded-sm p-1">
                            <BiPhoneCall className="w-3 h-3" />
                            <p className="text-sm text-green-600 font-extrabold ">
                                DashBoard
                            </p>
                        </div>
                    </Link>

                    <div className="cursor-pointer flex items-center gap-1 hover:outline outline-teal-400 rounded-sm p-1">
                        <BiPhoneCall className="w-3 h-3" />
                        <p className="text-sm font-medium">Call To Order</p>
                    </div>
                    <div className="cursor-pointer flex items-center gap-1 hover:outline outline-teal-400 rounded-sm p-1">
                        <FaRegHeart className="w-3 h-3" />
                        <p className="text-sm font-medium">Healthcare Product</p>
                    </div>
                    <div className="cursor-pointer flex items-center gap-1 hover:outline outline-teal-400 rounded-sm p-1">
                        <BsShopWindow className="w-3 h-3" />
                        <p className="text-sm font-medium">Pharmacy Register</p>
                    </div>
                </div>

                <div className="flex items-center gap-7">
                    <div className="cursor-pointer flex items-center gap-1 hover:outline outline-teal-400 rounded-sm p-1">
                        <p className="text-sm font-medium">Career</p>
                    </div>
                    <div className="cursor-pointer flex items-center gap-1 hover:outline outline-teal-400 rounded-sm p-1">
                        <p className="text-sm font-medium">To quick order</p>
                    </div>
                    <div className="cursor-pointer flex items-center gap-1 hover:outline outline-teal-400 rounded-sm p-1">
                        <LiaFilePrescriptionSolid size={20} />
                        <p className="text-sm font-medium">Upload Prescription</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubNav;
