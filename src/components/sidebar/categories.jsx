// 'use client'
// import { useCategories } from '@/hooks/useCategories';
// import { ToggleContext } from '@/provider/contextProvider';
// import Image from 'next/image';
// import { useContext } from 'react';
// import CategoriesLoader from '../loader/categoriesLoader';

// const Categories = () => {
//   const { data } = useContext(ToggleContext)
//   const { categories, isLoading } = useCategories()
//   return (
//     <ul className="space-y-2">
//       {
//         isLoading ?
//           [...Array(10).keys()].map((x) => (
//             <li key={x}>
//               <CategoriesLoader />
//             </li>
//           ))
//           : categories?.map((item, i) => {
//             return (
//               <li key={i} className="flex gap-2 h-[40px] items-center cursor-pointer lg:px-2 xl:px-3 py-1 rounded hover:bg-slate-100">
//                 <Image
//                   src={item.image}
//                   alt="categories"
//                   width={30}
//                   height={30} />

//                 <h3 className={`text-sm transition-all origin-left ${data.sidebarCollapse ? "invisible scale-0" : "visible scale-100"}`}>
//                   {item.name}
//                 </h3>
//               </li>
//             )
//           })
//       }
//     </ul>
//   );
// };

// export default Categories;
'use client'
import { useCategories } from '@/hooks/useCategories';
import { ToggleContext } from '@/provider/contextProvider';
import Image from 'next/image';
import { useContext } from 'react';
import CategoriesLoader from '../loader/categoriesLoader';
import useCategoriesAdd from '@/hooks/useCategoriesAdd';
import Link from 'next/link';
const Categories = () => {
  const { categories, isLoading } = useCategoriesAdd()
  const { data } = useContext(ToggleContext)
  // const { categories, isLoading } = useCategories()
  return (
    <ul className="space-y-2">
      {isLoading ? (
        [categories].map((x) => (
          <li key={x}>
            <CategoriesLoader />
          </li>
        ))
      ) : (
        categories?.map((category, i) => {
          const { name, sub } = category.cate;
          const imageUrl = sub.length > 0 ? sub[0].url : '';
          return (
            <div key={category._id}>
              <Link href={`/showproductcategories/${category?.cate.name}/${sub[0]?.name}`}>
                {/* <Link href={`/showproductbycategory/${category?.cate.name}`}> */}
                <li className="flex gap-2 h-[40px] items-center cursor-pointer lg:px-2 xl:px-3 py-1 rounded hover:bg-slate-100">
                  <Image
                    src={imageUrl}
                    alt="category"
                    className='rounded-lg'
                    width={30}
                    height={30}
                  />
                  <h3 className={`text-sm transition-all origin-left ${data.sidebarCollapse ? "invisible scale-0" : "visible scale-100"}`}>
                    {name}
                  </h3>
                </li>
              </Link>
            </div>
          );
        })
      )}
    </ul>
  );
};

export default Categories;