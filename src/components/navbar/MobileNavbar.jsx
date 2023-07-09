import NavLinkItem from './NavLinkItem';

const MobileNavbar = ({ isNavbarOpen, toggleNavbar }) => {
  return (
    <div
      className={`${
        isNavbarOpen ? 'block' : 'hidden'
      } md:hidden w-full px-5 pt-3 bg-white`}
    >
      <ul className='flex flex-col gap-4'>
        <NavLinkItem to={'/'} text={'Home'} onClick={toggleNavbar} />
      </ul>
    </div>
  );
};
export default MobileNavbar;
