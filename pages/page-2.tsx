import Link from "next/link";
import AnimationWrapper from "../components/AnimationWrapper";

const Page2 = () => {
  return (
    <AnimationWrapper>
      <div className="w-screen h-screen flex justify-center items-center bg-blue-50 flex-col">
        <h1 className="text-6xl">Page 2</h1>
        <Link className="text-3xl" href="/">
          Home
        </Link>
      </div>
    </AnimationWrapper>
  );
};

export default Page2;
