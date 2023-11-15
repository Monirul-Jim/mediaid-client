'use client'
import { usePathname } from 'next/navigation';
import Filter from './Filter/Filter';
import Categories from "./categories";

const Sidebar = () => {

  const path = usePathname()

  return (
    <> <div
      className='fixed xl:p-3 '
    // className={`shadow-lg first: ${"sidebarOpen" ? "lg:w-[180px] xl:w-[240px]" : "lg:w-[80px] xl:w-[100px]"
    //   } h-[90vh] fixed border border-t-0 ${'' == '/shop' || 'lg:p-1 xl:p-3'}`}
    >
      {path == '/shop' && <Filter />}
      {path == '/shop' || <Categories />}
    </div>
    </>
  );
};

export default Sidebar;
