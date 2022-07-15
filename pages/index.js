/* ./pages/index.js               */
import Head from 'next/head';
import icon1 from '/Users/charlesxian/WebstormProjects/tonext/my-project/pics/iconweb.png'
import icon from '../pics/iconweb.svg'
import Navbar from '../components/Navbar.jsx';
import Image from "next/image";
import DescriptionLists from '../components/DescriptionLists'
import Loginin from '../components/LoginIn'

export default function Home() {
  return (
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Navbar />
          <Loginin></Loginin>
      </div>
  );
}