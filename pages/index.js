/* ./pages/index.js               */
import Head from "next/head";
import icon from "../pics/iconweb.svg";
import Navbar from "../components/Navbar.js";
import Loginin from "../components/LoginIn";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel={icon} href="/favicon.ico" />
            </Head>
            <Navbar />
            <Loginin></Loginin>
        </div>
    );
}
