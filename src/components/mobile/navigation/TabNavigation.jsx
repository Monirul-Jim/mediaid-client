import Link from "next/link";
import { BsPerson, } from "react-icons/bs";
// BsBag, BsHouseDoor, BsTags 
import {
  AiFillGift,
  AiFillHome,
  AiFillShopping,
} from "react-icons/ai";
// import { MdSwitchAccount } from "react-icons/md";

const BottomNavbar = () => {
  const navItems = [
    {
      label: "Home",
      link: "/",
      icon: <AiFillHome className="text-slate-500" size="1.5em" />
    },
    {
      label: "Shop",
      link: "/shop",
      icon: <AiFillShopping className="text-slate-500" size="1.5em" />
    },
    {
      label: "Offer",
      link: "/",
      icon: <AiFillGift className="text-slate-500" size="1.5em" />
    },
    {
      label: "My Account",
      link: "/account",
      icon: <BsPerson className="text-slate-500" size="1.5em" />
    },
  ];

  return (
    <div className="w-full md:hidden py-2 px-8 z-[80] bg-white fixed bottom-0 flex items-center justify-between">
      {navItems.map((item, index) => (
        <Link key={index} href={item.link}>
          <div
            className={`flex flex-col items-center justify-center cursor-pointer relative ${'activeIcon' === index ? "text-teal-900" : "text-slate-500"
              }`}
          >
            {'activeIcon' === index && (
              <div className="w-16 h-[2px] bg-black absolute top-[-8px]" />
            )}
            {item.icon}
            <p className="text-[10px] font-medium">{item.label}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BottomNavbar;
