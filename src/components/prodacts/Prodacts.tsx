import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts, Product } from "./../../api/Api";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loading from "../loading/Loading";

const Products: React.FC = () => {
  const { data, isLoading } = useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <Loading />;

  return (
    <div>
      <h2 className="text-[48px] text-center mt-[70px] font-bold mb-[55px]">
        NEW ARRIVALS
      </h2>
      <div className="contianer flex flex-wrap items-center gap-[20px]">
        {data?.map((product) => (
          <div key={product.id}>
            <Link to={`/product/${product.id}`}>
              <div>
                <img
                  className="w-[295px] h-[298px] rounded-2xl bg-[#F0EEED]"
                  src={product.urls[0]}
                  alt=""
                />
              </div>
            </Link>
            <h2 className="text-[20px] text-[#000000] font-bold">
              {product.name}
            </h2>
            <div className="flex gap items-center gap-2">
              <div className="flex gap-1 text-yellow-500">
                {product.star >= 1 ? <FaStar /> : <FaRegStar />}
                {product.star >= 2 ? <FaStar /> : <FaRegStar />}
                {product.star >= 3 ? <FaStar /> : <FaRegStar />}
                {product.star >= 4 ? <FaStar /> : <FaRegStar />}
                {product.star >= 5 ? <FaStar /> : <FaRegStar />}
              </div>
              <p className="text-[14px] text-[#000000]">
                {product.star}/<span className="text-[#00000060]">5</span>
              </p>
            </div>
            <div className="flex gap-2">
              <p className="font-medium text-[#000] text-lg">
                ${product.desprice}
              </p>
              <p className="text-[#00000040]">
                <del>${product.price}</del>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
