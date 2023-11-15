import userDashboardRoutes from "@/routes-data/userDashboard";
import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";

function Account() {
  return (
    <div className="lg:p-4">
      <div className="mx-5 flex flex-col ">
        <div className="flex flex-col md:flex-row justify-between items-center ">
          <div className="flex items-center gap-3">
            <FaRegUserCircle className="w-10 h-10"></FaRegUserCircle>
            <div className="flex flex-col">
                <p>Hello,</p>
              <h1 className="lg:text-2xl font-medium">Nahid Ahmed</h1>
            </div>
          </div>
          <div className="flex mt-3 md:mt-0">
            <div className="text-center mr-4">
              <p className="border-l-2 border-r-2 w-32">Star Points</p>
              <p className="text-orange-500 font-bold text-2xl">0</p>
            </div>
            <div className="text-center mr-4">
              <p className="border-l-2 border-r-2 w-32">Star Points</p>
              <p className="text-orange-500 font-bold text-2xl">0</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 m-4">
        {userDashboardRoutes.map((card, index) => (
          <Link
            href={`/account${card.href}`}
            key={index}
            className="group py-2 px-2 md:py-10 md:px-5 flex flex-col items-center justify-center rounded-md  hover:border-blue-800 shadow transition-all duration-300"
          >
            <span className="w-11 h-11 rounded-full bg-[#EBEDF8] flex items-center justify-center mb-2">
              {card.icon}
            </span>
            <p className="text-sm md:text-lg">{card.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Account;
