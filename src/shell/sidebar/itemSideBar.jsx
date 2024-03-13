import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import itemSidebar from './itemSidebar.module.css';
const ItemSidebar = ({ name, link, icon }) => {
  return (
    <div className="sidebarItem">
      <li className={itemSidebar.navItemTitle}>
        <FontAwesomeIcon icon={icon} />
        {'  '}
        <div className="navitem"> {name}</div>
      </li>
    </div>
  );
};

export default ItemSidebar;
