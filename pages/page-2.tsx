import Link from "next/link";
import AnimationWrapper from "../components/AnimationWrapper";

const Page2 = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <AnimationWrapper>
        <h1 className="text-6xl">Page 2</h1>
        <Link className="text-3xl" href="/">
          Home
        </Link>
      </AnimationWrapper>
    </div>
  );
};

export default Page2;
