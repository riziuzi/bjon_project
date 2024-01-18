import React from 'react'

export default function ProductCard({data}) {
    console.log(data)
    return (
        <>
            <div className="product flex   my-3">
                <img src="./img/1.png" alt="img" className=" w-3/5 object-cover shadow-md rounded-l-3xl -mr-5" />
                <div className="discription flex flex-col bg-skin-bg300 w-2/5 shadow-md  px-5 rounded-3xl">
                    <div className="title font-bold font-sans text-lg my-3 text-left">Nike React Miler</div>
                    <div className="about font-sans mb-3 text-sm">Men's road running shoes</div>
                    <div className="availability text-sm w-1/2 text-skin-text100 mt-16">Available</div>
                    <div className="dummy flex text-sm my-2 items-center mt-3 ">
                        <div className="Left text-sm bg-skin-primary200 py-1 px-1 rounded-3xl w-1/2 text-skin-text100">
                            Only {data.inStock} left
                        </div>
                        <div className="discount text text-center w-1/2 text-green-500">
                            {data.discount}% off
                        </div>
                    </div>
                    <div className="interactions  flex justify-between mt-2 mb-5">
                        <div className="price  flextext-skin-text100 font-bold font-sans">
                            ${data.price}
                        </div>
                        <div className="otherinteractions flex ">
                            <div className="shop  ">
                                C
                            </div>
                            <div className="heart">
                                L
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
