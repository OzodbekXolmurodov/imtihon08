import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts, Product } from "../../api/Api";
import { FaRegStar, FaStar } from "react-icons/fa";
import rasim from "./../../assets/Frame 77.svg";
import rasim2 from "./../../assets/404-1.png";
import Loading from "../../components/loading/Loading";
import rasim3 from "./../../assets/Frame (6).svg";
import rasim4 from "./../../assets/Frame (7).svg";
import Comment from "../../components/comment/Comment";

const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  const product = data?.find((p) => p.id === id);
  const [count, setCount] = useState(1);

  const incroment = () => setCount(count + 1);
  const decroment = () => {
    if (count > 1) setCount(count - 1);
  };
  const handleAddToCart = () => {
    if (product) {
      const productToAdd = {
        ...product,
        quantity: count,
      };
      const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
      existingCart.push(productToAdd);
      localStorage.setItem("cart", JSON.stringify(existingCart));

      alert("Mahsulot savatchaga qo'shildi!");
    }
  };
  if (isLoading) return <Loading />;
  if (!product)
    return (
      <div className="contianer ">
        <img className="mt-16 ml-[330px]" src={rasim2} alt="" />
      </div>
    );
  return (
    <div>
      <div className="contianer pt-20">
        <div className="flex gap-8">
          <div>
            {product.urls.slice(1).map((url, i) => (
              <img
                key={i}
                className="w-[150px] h-[177px] rounded-xl mr-5 mb-10"
                src={url}
                alt=""
              />
            ))}
          </div>
          <div>
            <img
              className="w-[400px] h-[400px] rounded-lg"
              src={product.urls[0]}
              alt=""
            />
          </div>
          <div className="ml-12">
            <h2 className="text-4xl font-bold mb-4">{product.name}</h2>
            <div className="flex gap items-center gap-2  mb-3">
              <div className="flex gap-1 text-yellow-500">
                {product.star >= 1 ? <FaStar /> : <FaRegStar />}
                {product.star >= 2 ? <FaStar /> : <FaRegStar />}
                {product.star >= 3 ? <FaStar /> : <FaRegStar />}
                {product.star >= 4 ? <FaStar /> : <FaRegStar />}
                {product.star >= 5 ? <FaStar /> : <FaRegStar />}
              </div>
              <p className="text-[14px] text-[#000000]">
                {product.star}/<span className="text-[#00000060]">5</span>{" "}
              </p>
            </div>
            <div className="flex gap-3">
              <p className="text-3xl font-medium text-black">
                ${product.desprice}
              </p>
              <p className="text-3xl text-gray-400 line-through">
                ${product.price}
              </p>
            </div>
            <p className="w-[560px] mt-4 text-[#00000099] text-xs">
              {product.desc}
            </p>
            <hr className="mt-[20px]" />
            <p className="mt-4 text-[#00000099] text-xs">Select Colors</p>
            <img className="mt-5 mb-5" src={rasim} alt="" />
            <hr />
            <p className="mt-4 text-[#00000099] text-xs">Choose Size</p>
            <div className="flex gap-5 mt-5">
              {product.size.map((url, i) => (
                <button
                  className="rounded-3xl bg-black pt-2 pb-2 pl-4 pr-4 text-white"
                  key={i}
                >
                  {url}
                </button>
              ))}
            </div>
            <hr className="mt-5 mb-5" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5 bg-[#F0F0F0] px-5 py-1 rounded-3xl w-[120px] ">
                <button onClick={decroment} className="text-2xl">
                  <img src={rasim3} alt="" />
                </button>
                <p className="text-xl">{count}</p>
                <button onClick={incroment} className="text-2xl">
                  <img src={rasim4} alt="" />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="bg-black text-white py-2 px-6 rounded-3xl w-[400px] "
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Comment />
    </div>
  );
};
export default Detail;
