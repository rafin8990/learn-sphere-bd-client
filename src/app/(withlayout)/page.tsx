import Banner from "@/components/HomeComponent/Banner";
import Counter from "@/components/HomeComponent/Counter";
import Features from "@/components/HomeComponent/Features";
import HowItWork from "@/components/HomeComponent/HowItWork";
import Review from "@/components/HomeComponent/Review";
import WhyChooseUS from "@/components/HomeComponent/WhyChooseUS";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Features></Features>
      <WhyChooseUS></WhyChooseUS>
      <Counter></Counter>
      <HowItWork></HowItWork>
      <Review></Review>
    </div>
  );
}
