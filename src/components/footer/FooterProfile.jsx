const FooterProfile = ({ text, link, Icon }) => {
  return (
    <div className='flex gap-2  items-center flex-shrink flex-grow-0'>
      <Icon className='text-gray-400 text-lg  transition-colors duration-150 ease-linear' />
      <a
        href={link}
        target='_blank'
        className='text-gray-400 text-lg hover:text-white transition-colors duration-150 ease-linear'
      >
        {text}
      </a>
    </div>
  );
};
export default FooterProfile;
