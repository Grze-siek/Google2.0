import Avatar from './Avatar';
import { ViewGridIcon } from '@heroicons/react/solid';

function Header() {
  return (
    <header className="flex w-full justify-between p-5 text-sm text-gray-700">
      <div className="flex items-center space-x-4">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>
      <div className="flex items-center space-x-4">
        <p className="link">Gmail</p>
        <p className="link">images</p>
        <ViewGridIcon className="h-10 w-10 p-2 text-gray-700 rounded-full hover:bg-gray-100 cursor-pointer" />
        <Avatar url="https://source.unsplash.com/random/?face/" />
      </div>
    </header>
  );
}

export default Header;
