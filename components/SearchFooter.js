import { ArrowCircleRightIcon } from '@heroicons/react/solid';

function SearchFooter({ geolocationData }) {
  const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
  return (
    <div className="bg-gray-100 mx-auto w-full py-2">
      <div className="border-gray-300 border-b w-full">
        <div className="flex items-center py-3 px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 pb-2">
          <p className="text-md text-gray-500 pr-3 border-gray-300 border-r">
            {Object.keys(geolocationData) != 0
              ? regionNames.of(geolocationData.country)
              : 'United Kingdom'}
          </p>
          <div className="flex items-center space-x-1 pl-3 cursor-pointer">
            <ArrowCircleRightIcon className="h-4 text-gray-600" />
            <p className="text-gray-600 text-md font-bold">
              {Object.keys(geolocationData) != 0 && geolocationData.city}
            </p>
          </div>
        </div>
      </div>
      <div className="flex space-x-4 py-3 px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 pb-2">
        <p className="text-md text-gray-500">Help</p>
        <p className="text-md text-gray-500">Send Opinion</p>
        <p className="text-md text-gray-500">Privacy</p>
        <p className="text-md text-gray-500">Terms</p>
      </div>
    </div>
  );
}

export default SearchFooter;
