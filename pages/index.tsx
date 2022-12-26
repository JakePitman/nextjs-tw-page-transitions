import Link from "next/link";
import AnimationWrapper from "../components/AnimationWrapper";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <AnimationWrapper>
        <ul>
          <li>
            <Link className="text-3xl" href="/page-1">
              Link 1
            </Link>
          </li>

          <li>
            <Link className="text-3xl " href="page-2">
              Link 2
            </Link>
          </li>
        </ul>
      </AnimationWrapper>
    </div>
  );
}
