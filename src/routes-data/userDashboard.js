import { BsFillBagHeartFill, BsPower } from "react-icons/bs";

const { AiFillStar } = require("react-icons/ai");
const { FaShoppingCart, FaUserAlt } = require("react-icons/fa");
const { IoMdBookmarks, IoMdWallet } = require("react-icons/io");

const userDashboardRoutes = [
      {
        icon: <FaShoppingCart color="blue" size={20} />,
        title: "Orders",
        href: "/orders",
      },
      {
        icon: <FaUserAlt color="blue" />,
        title: "Edit Profile",
        href: "/edit-profile",
      },
      {
        icon: <IoMdBookmarks color="blue" size={22} />, //IoMdBookmarks
        title: "Address",
        href: "/address",
      },
      {
        icon: <BsFillBagHeartFill color="blue" size={22} />, // GiEternalLove
        title: "Wish list",
        href: "/wishlist",
      },
  
      {
        icon: <AiFillStar color="blue" size={22} />,
        title: "Star Points",
        href: "/star-points",
      },
      {
        icon: <IoMdWallet color="blue" size={22} />,
        title: "Transactions",
        href: "/my-transactions",
      },
      {
        icon: <BsPower color="blue" size={22} />, // FaComputer
        title: "Log Out",
        href: "",
      },
      // Add more card data objects here
  ];

export default userDashboardRoutes;

