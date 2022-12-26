import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="w-screen h-screen bg-blue-50 flex justify-center items-center">
        <ul>
          <li>
            <a href="/page-1">Link 1</a>
          </li>

          <li>
            <a href="page-2">Link 2</a>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
