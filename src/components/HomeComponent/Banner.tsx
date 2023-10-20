import { FaSearch } from "react-icons/fa";
import "../../styles/custom.css";

const Banner = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/wSg7jCP/jjjjjjjjj.jpg')] bg-no-repeat md:bg-cover h-[500px] md:h-[700px] bg-opacity-40 flex justify-center items-center">
      <div className="">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-white">
          Your Personal Assistant
        </h1>
        <p className="text-xl text-center text-white">
          One-stop solution for your services. Order any service, anytime.
        </p>
        <div className="my-10 flex justify-center items-center mx-2">
          <input className="input input-bordered md:w-full" type="text"></input>
          <button className="btn border border-gray-400 ml-2 md:ml-5">
            <FaSearch></FaSearch> Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
