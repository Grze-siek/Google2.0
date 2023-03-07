import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SearchFooter from '../components/SearchFooter';
import SearchHeader from '../components/SearchHeader';
import SearchResults from '../components/SearchResults';
import Response from '../Response';

function Search({ results }) {
  const router = useRouter();
  const [geolocationData, setGeolocationData] = useState({});

  useEffect(() => {
    async function fetchGeolocationData() {
      const geoData = await fetch(
        `https://ipinfo.io?token=d580dd8b934eec`
      ).then((res) => res.json());
      setGeolocationData(geoData);
    }
    fetchGeolocationData();
  }, []);
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/googleicon.png" />
      </Head>
      <SearchHeader />
      <SearchResults results={results} />
      <SearchFooter geolocationData={geolocationData} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || 0;

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((res) => res.json());

  return {
    props: {
      results: data,
    },
  };
}
