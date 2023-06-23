import NavLinkItem from './NavLinkItem';

const MobileNavbar = ({ isNavbarOpen, toggleNavbar }) => {
  return (
    <div
      className={`${
        isNavbarOpen ? 'block' : 'hidden'
      } md:hidden w-full px-5 py-3 bg-white`}
    >
      <ul className='flex flex-col gap-4'>
        <NavLinkItem to={'/'} text={'Home'} onClick={toggleNavbar} />
        <NavLinkItem to={'/pages'} text={'Pages'} onClick={toggleNavbar} />
        <NavLinkItem to={'/shop'} text={'Shop'} onClick={toggleNavbar} />
        <NavLinkItem to={'/element'} text={'Element'} onClick={toggleNavbar} />
        <NavLinkItem to={'/blog'} text={'Blog'} onClick={toggleNavbar} />
      </ul>
    </div>
  );
};
export default MobileNavbar;
