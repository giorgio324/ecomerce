import { Link } from 'react-router-dom';

const NavLinkItem = ({ to, text, onClick }) => {
  return (
    <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration[1px] cursor-pointer transition-all '>
      <Link to={to} onClick={onClick}>
        {text}
      </Link>
    </li>
  );
};
export default NavLinkItem;
