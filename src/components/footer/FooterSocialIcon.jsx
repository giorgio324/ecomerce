const FooterSocialIcon = ({ IconComponent, link }) => {
  return (
    <a href={link} target='_blank'>
      <IconComponent className='text-gray-400 hover:text-white transition-colors duration-150 ease-linear text-lg' />
    </a>
  );
};

export default FooterSocialIcon;
