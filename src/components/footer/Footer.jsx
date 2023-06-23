import CustomButton from '../customElements/CustomButton';
import {
  footerSocialIcons,
  footerLocation,
  footerProfile,
} from '../../data/footer/data';
import FooterSocialIcon from './FooterSocialIcon';
import FooterLocation from './FooterLocation';
import FooterProfile from './FooterProfile';
FooterSocialIcon;
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className='bg-black text-[#949494] py-20'>
      <div className='max-w-screen-xl mx-auto px-10 grid grid-cols-1 justify-items-center gap-8 md:justify-items-start md:grid-cols-2 lg:grid-cols-4 '>
        {/* social media and info */}
        <div className='flex flex-col gap-4 items-center md:items-start'>
          <h1 className='font-bold font-tiltPrism text-2xl text-white'>
            SHOPPY
          </h1>
          <p className=''>&copy; SHOPPY {year}</p>
          <div className='flex gap-4'>
            {footerSocialIcons.map((icon, i) => {
              return (
                <FooterSocialIcon
                  key={i}
                  IconComponent={icon.icon}
                  link={icon.link}
                />
              );
            })}
          </div>
        </div>
        {/* location  */}
        <div className='flex flex-col gap-4 items-center md:items-start'>
          <h1 className='font-bold text-white text-xl'>Locate Us</h1>
          {footerLocation.map((location, i) => {
            return <FooterLocation key={i} text={location.title} />;
          })}
        </div>
        {/* Profile */}
        <div className='flex flex-col gap-4 capitalize items-center md:items-start'>
          <h1 className='font-bold text-white text-xl'>Profile</h1>
          {footerProfile.map((profile, i) => {
            return (
              <FooterProfile
                Icon={profile.icon}
                link={'#'}
                text={profile.title}
                key={i}
              />
            );
          })}
        </div>
        {/* Newsletter */}
        <div className='flex flex-col justify-center justify-self-stretch'>
          <input
            type='email'
            name='emailletter'
            id='emailletter'
            className='bg-transparent border px-4 py-2
             text-sm outline-none'
            placeholder='Enter your email'
          />
          <CustomButton text='Subscribe' px={4} py={2} reverseColors />
        </div>
      </div>
    </div>
  );
};
export default Footer;
