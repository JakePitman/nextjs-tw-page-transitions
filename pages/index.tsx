import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="w-screen h-screen bg-blue-50 flex justify-center items-center">
        <ul>
          <li>
            <Link href="/page-1">Link 1</Link>
          </li>

          <li>
            <Link href="page-2">Link 2</Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
