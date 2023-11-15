'use client'
import SearchProductLoader from "@/components/loader/searchProductLoader";
import SearchedProduct from "@/components/product/search/searchedProduct";
import { useCategories } from "@/hooks/useCategories";
import { useSearch } from "@/hooks/useSearch";
import { useEffect, useRef, useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";


const SearchBar = () => {

  const defaultCategory = {
    _id: "",
    name: "All Departments",
    image: ""
  }
  const inputRef = useRef(null);
  const { categories, isLoading } = useCategories()
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory)
  const [isSearchList, setIsSearchList] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    if (categories && categories.length) {
      const interval = setInterval(() => {
        setPlaceholderIndex(
          (prevIndex) => (prevIndex + 1) % categories.length
        );
      }, 2000); // Change the placeholder every 2 seconds (adjust as needed)
      return () => clearInterval(interval);
    }

  }, [categories, isSearchList]);


  // Search handler 
  const [searchData, setSearchData] = useState("")
  const searchText = searchData.trim();
  const { products, loading } = useSearch(searchText, selectedCategory._id) // Search Request handler
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 666px)' })  // Responsive query 


  return (
    <div >
      <div className="mt-4 rounded-sm outline-transparent relative mb-1 lg:mb-0  z-20">
        <div className="flex items-center justify-between mx-1 my-2 rounded-md bg-gray-100">

          {/*  Select categoryList Dropdown */}
          <div onClick={() => setIsSearchList(false)} className="dropdown ">
            <div
              tabIndex={0}
              className="flex items-center px-2 py-2 rounded-l-md text-white cursor-pointer gap-1 h-full w-full bg-[#60B8A6]"
            >
              <p className="cursor-pointer capitalize text-sm">
                {isLoading ? "Loading..." : isTabletOrMobile ? defaultCategory.name.slice(0, 3) : selectedCategory.name}
              </p>
              <BiSolidDownArrow className="inline-block" size={10} />
            </div>
            <div onClick={(e) => e.stopPropagation()}>
              {
                !isLoading && categories && categories.length ? (
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-50 p-2 bg-white w-52 shadow-2xl"
                  >
                    <li
                      onClick={() => {
                        setSelectedCategory(defaultCategory)
                        inputRef.current?.focus()
                      }}
                      className="cursor-pointer px-1 py-1 text-black hover:bg-[#60B8A6] hover:text-white capitalize text-sm">
                      {defaultCategory.name}
                    </li>
                    {categories.map((list, i) => (
                      <li
                        onClick={() => {
                          setSelectedCategory(list)
                          inputRef.current?.focus()
                        }}
                        key={i}
                        className="cursor-pointer px-1 py-1 text-black hover:bg-[#60B8A6] hover:text-white capitalize text-sm"
                      >
                        {list.name}
                      </li>
                    ))}
                  </ul>
                ) : null}
            </div>
          </div>
          {/* Search Input */}
          <input
            tabIndex={0}
            ref={inputRef}
            className={`appearance-none bg-gray-100 text-gray-700 px-4 py-[7px] leading-tight outline-none focus:outline-none focus:bg-white grow w-full md:w-auto`}
            type="text"
            onChange={({ target }) => setSearchData(target.value)}
            placeholder={categories && categories[placeholderIndex].name}
            onFocus={() => setIsSearchList(true)}
          />
          <div className="px-3 py-2 cursor-pointer bg-[#60B8A6] text-white rounded-r-md">
            <FiSearch size={20} />
          </div>
        </div>

        {/* Search Suggest modal */}
        {isSearchList && (
          <div className="hidden absolute min-h-12 p-2 top-0 mt-12 bg-white shadow-teal-500 rounded-sm shadow-2xl w-full md:flex flex-col z-50">
            {
              loading ?
                [...Array(5).keys()].map(i => (
                  <SearchProductLoader key={i} />
                ))
                : products && products.length ? products.map((item, i) => (
                  <SearchedProduct setIsSearchList={setIsSearchList} key={i} item={item} />
                )
                ) : <span className="text-center">{!searchData.trim().length ? "Please type to search !" : "Product not found"}</span>}
          </div>
        )}
      </div>{
        isSearchList && (
          <div onClick={() => setIsSearchList(false)} className="bg-transparent absolute w-full h-screen top-0 left-0"></div>
        )}
    </div>
  );
};

export default SearchBar;