import casual from "./../../assets/Frame 61.svg";
import casual2 from "./../../assets/Frame 62.svg";
import casual3 from "./../../assets/Frame 64.svg";
import casual4 from "./../../assets/Frame 63.svg";

const Casual = () => {
  return (
    <div className="contianer pt-[70px] pr-[64px] pl-[64px] pb-[76px] rounded-3xl w-[1239px] bg-[#F0F0F0] div-main">
      <h2 className="text-[48px] font-bold mb-[64px] ml-[212px]">
        BROWSE BY DRESS STYLE
      </h2>
      <div className="flex items-center justify-between">
        <img className="mb-[20px]" src={casual} alt="" />
        <img className="mb-[20px]" src={casual2} alt="" />
      </div>
      <div className="flex items-center justify-between">
        <img src={casual3} alt="" />
        <img src={casual4} alt="" />
      </div>
    </div>
  );
};

export default Casual;
