import Link from "next/link";

const Page2 = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-50 flex-col">
      <h1>Page 2</h1>
      <Link href="/">Home</Link>
    </div>
  );
};

export default Page2;
