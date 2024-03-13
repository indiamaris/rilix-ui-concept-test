import ItemSidebar from './itemSideBar';

// import rilixLogo from '../../assets/images/rilixLogo.svg';
import {
  faTachometerAlt,
  faIdCard,
  faCarAlt,
  faWallet,
  faCartPlus,
  faRss,
} from '@fortawesome/free-solid-svg-icons';
import BrandSidebar from './brandSidebar';
import rilixLogo from '../img/rilix/rilixLogo.svg';
import SidebarDivider from './sidebarDivider';
import { sidebar, bgGradientPrimary } from './sidebar.module.css';
const Sidebar = () => {
  return (
    <div className={sidebar}>
      <div className={sidebar.bgGradientPrimary}>
        <div className="brandIconAligment  d-flex justify-content-center align-items-center ">
          <div className="sidebarBrand">
            <BrandSidebar logo={rilixLogo} link={'#'} className="bg-danger" />
          </div>
        </div>
        <SidebarDivider />
        <ul className="nav nav-pills flex-column mb-auto ">
          <ItemSidebar name={'Dashboard'} link={'#'} icon={faTachometerAlt} />
          <ItemSidebar name={'Licences'} link={'#'} icon={faIdCard} />
          <ItemSidebar name={'Coasters'} link={'#'} icon={faCarAlt} />
          <ItemSidebar name={'Wallet'} link={'#'} icon={faWallet} />
          <ItemSidebar name={'Store'} link={'#'} icon={faCartPlus} />
          <ItemSidebar name={'News'} link={'#'} icon={faRss} />
        </ul>

        <hr />
      </div>
    </div>
  );
};

export default Sidebar;
