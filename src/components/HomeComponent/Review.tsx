import { FaClock } from "react-icons/fa";

const Review = () => {
  return (
    <div className="bg-gray-100 p-10">
      <div className="lg:w-[1440px] mx-auto">
        <div className="mx-5">
          <p className="text-xl text-gray-500">___SOME HAPPY FACES</p>
          <h1 className="text-2xl md:text-4xl font-semibold">
            Real Happy Customers, Real Stories
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 md:my-20">
          <div className=" p-10 w-[400px] ">
            <h3 className="text-2xl"> Arif Ur Rahman</h3>
            <p className="flex items-center">
              <FaClock></FaClock> 2 weeks ago
            </p>

            <p className="text-xl mt-5">
              “ Initially I was reluctant. I wasn’t sure how an online platform
              would be. SolutionBD was able to complete the job just as I
              imagined it to be. Thanks to them, they made it possible. -
              Partner Flyout BD’’
            </p>
          </div>
          <div className="border p-10 w-[370px] md:w-[500px] rounded-xl shadow-lg bg-gradient-to-r from-cyan-500 to-blue-500">
            <h3 className="text-2xl text-white">Zabeen Yousuf Nur</h3>
            <p className="flex items-center  text-white">
              <FaClock></FaClock> 2 days ago
            </p>

            <p className="text-xl mt-5  text-white">
              “ Such service platforms are available in other countries. I’ve
              personally used those when I was abroad. I’m very pleased that
              such a portal is available here in Bangladesh as well. Thank you
              SolutionBD.’’
            </p>
          </div>
          <div className=" p-10 w-[400px]">
            <h3 className="text-2xl"> Zeba Fariba</h3>
            <p className="flex items-center">
              <FaClock></FaClock> 4 days ago
            </p>

            <p className="text-xl mt-5">
              “ It was my marriage and wasn’t getting schedule from any beauty
              parlor. So, I downloaded SolutionBD app and found that it has all
              of my requirements. The beautician arrived in time and was really
              amazing. Thank you.’’
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
