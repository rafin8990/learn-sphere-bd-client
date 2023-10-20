import engine from "../../../public/images/engine.png";
import radiator from "../../../public/images/radiator.jpg";
import suspention from "../../../public/images/suspention.webp";
import battery from "../../../public/images/battery.png";
import AC from "../../../public/images/AC.png";
import Image from "next/image";
const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 border lg:w-[1440px] mx-auto shadow-2xl md:absolute md:bottom-20 md:left-[10%] bg-white rounded-xl">
      <div className="m-5 w-[250px]">
        <div className="flex justify-center">
          <Image
            src={engine}
            alt="nav-image-logo"
            width={100}
            height={100}
          ></Image>
        </div>
        <h2 className="text-center">Engine Repair</h2>
      </div>
      <div className="m-5 w-[250px]">
        <div className="flex justify-center">
          <Image
            src={radiator}
            alt="nav-image-logo"
            width={100}
            height={100}
          ></Image>
        </div>
        <h2 className="text-center">Car Engine Oil & Filter Change</h2>
      </div>
      <div className="m-5 w-[250px]">
        <div className="flex justify-center">
          <Image src={AC} alt="nav-image-logo" width={100} height={100}></Image>
        </div>
        <h2 className="text-center">AC Repair</h2>
      </div>
      <div className="m-5 w-[250px]">
        <div className="flex justify-center">
          <Image
            src={battery}
            alt="nav-image-logo"
            width={100}
            height={100}
          ></Image>
        </div>
        <h2 className="text-center">Change Battery</h2>
      </div>
      <div className="m-5 w-[250px]">
        <div className="flex justify-center">
          <Image
            src={suspention}
            alt="nav-image-logo"
            width={100}
            height={100}
          ></Image>
        </div>
        <h2 className="text-center">Customise suspention</h2>
      </div>
    </div>
  );
};

export default Features;
