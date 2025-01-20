import rasim from "./../../assets/Rectangle 2@2x.svg";
import rasim1 from "./../../assets/Vector2.png";
import rasim2 from "./../../assets/Vector3.png";
import rasim3 from "./../../assets/Group.png";
import rasim4 from "./../../assets/zara-logo-1 1.png";
import rasim5 from "./../../assets/gucci-logo-1 1.png";
import rasim6 from "./../../assets/prada-logo-1 1.png";
import rasim7 from "./../../assets/Group1.png";

const Banner = () => {
  return (
    <>
      <div
        className="bg-cover bg-center h-[663px]"
        style={{ backgroundImage: `url(${rasim})` }}
      >
        <div className="contianer relative">
          <img
            className="absolute top-[300px] left-[630px]"
            src={rasim1}
            alt=""
          />
          <img
            className="absolute top-[86px] left-[1160px]"
            src={rasim2}
            alt=""
          />
          <h2 className="text-[64px] w-[577px] font-bold pt-[50px]">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h2>
          <p className="text-xs w-[420px] text-[#00000060] mt-[32px]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="pt-[15px] pb-[15px] pl-[67px] pr-[67px] bg-black text-[#FFFFFF] rounded-full mt-[47px]">
            Shop Now
          </button>
          <div className="flex gap-[64px] mt-[48px]">
            <div>
              <h5 className="text-[40px] font-serif">200+</h5>
              <p className="text-xs text-[#00000099]">International Brands</p>
            </div>
            <div>
              <h5 className="text-[40px] font-serif">2,000+</h5>
              <p className="text-xs text-[#00000099]">High-Quality Products</p>
            </div>
            <div>
              <h5 className="text-[40px] font-serif">30,000+</h5>
              <p className="text-xs text-[#00000099]">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="contianer flex items-center justify-between pt-8   pb-8">
          <img src={rasim3} alt="" />
          <img src={rasim4} alt="" />
          <img src={rasim5} alt="" />
          <img src={rasim6} alt="" />
          <img src={rasim7} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
