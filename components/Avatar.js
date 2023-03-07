function Avatar({ className, url }) {
  return (
    <img
      loading="lazy"
      className={`${className} h-10 w-10 rounded-full object-cover cursor-pointer transition duration-150 ease-in-out transform hover:scale-110`}
      src={url}
      alt="Profile picture"
    />
  );
}

export default Avatar;
