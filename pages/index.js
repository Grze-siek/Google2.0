import { SearchIcon } from '@heroicons/react/outline';
import { MicrophoneIcon } from '@heroicons/react/solid';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRef } from 'react';
import { useRouter } from 'next/router';

const Home = ({ data }) => {
  const searchInputRef = useRef(null);
  const router = useRouter();
  console.log(data);
  console.log(process.env.NEXT_PUBLIC_API_URL);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/googleicon.png" />
      </Head>
      <Header />
      <form
        className="flex flex-col items-center mt-44 flex-grow w-4/5"
        action=""
      >
        <Image
          src="https://www.shareicon.net/data/512x512/2015/09/25/107085_google_512x512.png"
          height={100}
          width={300}
        />
        <div className="flex w-full items-center justify-center rounded-full mt-5 focus-within:shadow-lg hover:shadow-lg max-w-md border border-gray-200 px-5 py-3 sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 text-gray-500 mr-3" />
          <input
            ref={searchInputRef}
            type="text"
            className="focus:outline-none flex-grow"
            placeholder="Search in Google..."
          />
          <MicrophoneIcon className="h-5 text-gray-500 ml-3" />
        </div>
        <div className="flex flex-col space-y-2 mt-8 w-1/2 justify-center sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">
            Google search
          </button>
          <button onClick={search} className="btn">
            I'm feeling lucky
          </button>
        </div>
      </form>
      <Footer geolocationData={data} />
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const data = await fetch(`https://ipinfo.io?token=d580dd8b934eec`).then(
    (res) => res.json()
  );

  return {
    props: {
      data,
    },
  };
}
