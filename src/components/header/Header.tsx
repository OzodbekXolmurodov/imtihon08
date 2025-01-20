import logo from "./../../assets/SHOP.CO.svg";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import { TbUserCircle } from "react-icons/tb";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="contianer">
      <div className="contianer flex items-center justify-between pt-6 pb-6 relative">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>

        <div className="flex gap-[13px] text-sm font-medium">
          <p className="cursor-pointer hover:text-gray-500 transition">Shop</p>
          <p className="cursor-pointer hover:text-gray-500 transition">
            On Sale
          </p>
          <p className="cursor-pointer hover:text-gray-500 transition">
            New Arrivals
          </p>
          <p className="cursor-pointer hover:text-gray-500 transition">
            Brands
          </p>
        </div>
        <FiSearch className="absolute top-46 left-[573px]  text-gray-500 " />
        <input
          className="w-[577px] p-2 border bg-[#F0F0F0] rounded-3xl focus:outline-none pl-[50px]"
          type="text"
          placeholder="Search for products..."
        />
        <div className="flex gap-[15px]">
          <Link to="/cart">
            <FiShoppingCart className="size-4 hover:text-gray-500 transition" />
          </Link>

          <TbUserCircle className="size-4  hover:text-gray-500 transition" />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
