import { useState } from "react";
import { seedData } from "./seedData";
import ProductCard from "./Components/ProductCard/ProductCard";
import Navbar2 from "./Components/Navbar2";
function App() {
  const [loading, setLoading] = useState(false)                                 // for loading an
  const [focusedData, setFocusedData] = useState(null)

  return (
    <>
      <Navbar2 />
      <div className="mainBackground w-full flex justify-center">
        <div className="background w-full justify-center sm:w-11/12 flex">
          <div className="left flex  flex-col w-3/4 mt-12">
            <input className="search rounded-3xl text-skin-text100 shadow-md flex items-center w-11/12 h-[60px] py-5 px-10" placeholder="Search" />
            <div className="categories flex mt-5">
              <div className="bestSelling text-skin-text200 bg-skin-bg200 shadow-md mr-2 px-3 py-1 rounded-full flex items-center border border-gray-300">
                Best Selling
              </div>
              <div className="bestSelling text-skin-text200 bg-skin-bg200 shadow-md  mr-2 px-3 py-1 rounded-full flex items-center border border-gray-300">
                Best Selling
              </div>
              <div className="bestSelling text-skin-text200 bg-skin-bg200 shadow-md mr-2 px-3 py-1 rounded-full flex items-center border border-gray-300">
                Best Selling
              </div>
              <div className="bestSelling text-skin-text200 bg-skin-bg200 shadow-md mr-2 px-3 py-1 rounded-full flex items-center border border-gray-300">
                Best Selling
              </div>
              <div className="bestSelling text-skin-text200 bg-skin-bg200 shadow-md mr-2 px-3 py-1 rounded-full flex items-center border border-gray-300">
                Best Selling
              </div>
              <div className="bestSelling text-skin-text200 bg-skin-bg200 shadow-md mr-2 px-3 py-1 rounded-full flex items-center border border-gray-300">
                Best Selling
              </div>
            </div>
            <div className="Products text-skin-text200 text-2xl font-bold mt-5 ml-3">Products</div>
            <div className="productMarket flex-col mt-10 grid grid-cols-1 lg:grid-cols-2">
              {loading ? "loading..." :
                seedData.map((data, index) => (
                  <ProductCard key={index} data={data} />
                ))
              }
            </div>
          </div>
          <div className="right hidden flex-col h-[calc(100vh-140px)] sticky top-28 mt-4 w-1/4 items-end px-16 min-w-8 sm:flex">
            <div className="navbar w-[25%] min-w-10 rounded-xl shadow-md  flex flex-col justify-evenly items-center flex-1">
              <div className="option px-2">
                <img src="./img/heart.svg" alt="" className="hover:scale-110 hover:cursor-pointer transition ease-in-out  duration-100"/>
              </div>
              <div className="option px-2">
                <img src="./img/cart.svg" alt="" className="hover:scale-110 hover:cursor-pointer transition ease-in-out  duration-100"/>
              </div>
              <div className="option px-2">
                <img src="./img/profile.svg" alt="" className="hover:scale-110 hover:cursor-pointer transition ease-in-out  duration-100"/>
              </div>
              <div className="option px-2">
                <img src="./img/heart.svg" alt="" className="hover:scale-110 hover:cursor-pointer transition ease-in-out  duration-100" />
              </div>
              <img src="./img/hide.svg" alt="" className="hover:scale-110 hover:cursor-pointer transition ease-in-out  duration-100" />
            </div>

          </div>
        </div>
      </div>
    </>

  );
}

export default App;
