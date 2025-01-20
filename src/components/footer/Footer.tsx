import logoFuter from "./../../assets/SHOP.CO.svg";
import socol from "./../../assets/Social.svg";
import rasim from "./../../assets/Frame 53.svg";

const Footer = () => {
  return (
    <>
      <div className="relative bg-[#F0F0F0] ">
        <div className="contianer">
          <div className="flex bg-[#000000] pt-9 pb-9 pl-16 pr-16 rounded-[20px] justify-between absolute w-[1240px] top-[-80px]">
            <div>
              <h2 className="text-[35px] text-[#FFFFFF] font-medium">
                STAY UPTO DATE ABOUT
              </h2>
              <h2 className="text-[35px] text-[#FFFFFF] font-medium">
                OUR LATEST OFFERS
              </h2>
            </div>
            <div>
              <input
                className="block w-[349px] p-2 rounded-3xl outline-none pl-[40px]"
                type="text"
                placeholder="Enter your email address"
              />
              <button className="w-[349px] p-2 rounded-3xl bg-[#FFFFFF] mt-[14px] text-[16px]">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between mt-[150px] pt-[140px] ">
            <div className="w-[248px]">
              <img className="w-[167px] mb-[25px]" src={logoFuter} alt="" />
              <p className="text-xs text-[#00000060] w-[193px] mb-[35px]">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <img src={socol} alt="" />
            </div>
            <div>
              <h5 className="text-lg font-mono mb-[26px]">Company</h5>
              <p className="text-xs text-[#00000060] mb-[15px]">About </p>
              <p className="text-xs text-[#00000060] mb-[15px]">Features</p>
              <p className="text-xs text-[#00000060] mb-[15px]">Works</p>
              <p className="text-xs text-[#00000060] mb-[15px]">Career</p>
            </div>
            <div>
              <h5 className="text-lg font-mono mb-[26px]">Help</h5>
              <p className="text-xs text-[#00000060] mb-[15px]">
                Customer Support
              </p>
              <p className="text-xs text-[#00000060] mb-[15px]">
                Delivery Details
              </p>
              <p className="text-xs text-[#00000060] mb-[15px]">
                Terms & Conditions
              </p>
              <p className="text-xs text-[#00000060] mb-[15px]">
                Privacy Policy
              </p>
            </div>
            <div>
              <h5 className="text-lg font-mono mb-[26px]">FAQ</h5>
              <p className="text-xs text-[#00000060] mb-[15px]">Account</p>
              <p className="text-xs text-[#00000060] mb-[15px]">
                Manage Deliveries
              </p>
              <p className="text-xs text-[#00000060] mb-[15px]">Orders</p>
              <p className="text-xs text-[#00000060] mb-[15px]">Payments</p>
            </div>
            <div>
              <h5 className="text-lg font-mono mb-[26px]">Resources</h5>
              <p className="text-xs text-[#00000060] mb-[15px]">Free eBooks</p>
              <p className="text-xs text-[#00000060] mb-[15px]">
                Development Tutorial
              </p>
              <p className="text-xs text-[#00000060] mb-[15px]">
                How to - Blog
              </p>
              <p className="text-xs text-[#00000060] mb-[15px]">
                Youtube Playlist
              </p>
            </div>
          </div>
          <hr className="mt-[50px] mb-[20px]" />
          <div className="flex items-center justify-between">
            <p className="text-xs text-[#00000060] ">
              Shop.co © 2000-2023, All Rights Reserved
            </p>
            <img src={rasim} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
