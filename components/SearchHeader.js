import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

function SearchHeader() {
  const router = useRouter();
  const searchInputRef = useRef();

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.shareicon.net/data/512x512/2015/09/25/107085_google_512x512.png"
          height={40}
          width={120}
          onClick={() => router.push('/')}
          className="cursor-pointer"
        />
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            ref={searchInputRef}
            type="text"
            className="focus:outline-none w-full flex-grow"
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = '')}
          />
          <MicrophoneIcon className="h-6 text-blue-500 mr-3 hidden sm:inline-flex border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden onClick={search}></button>
        </form>
        <Avatar
          className="ml-auto"
          url="https://source.unsplash.com/random/?face/"
        />
      </div>
      <HeaderOptions />
    </header>
  );
}

export default SearchHeader;
