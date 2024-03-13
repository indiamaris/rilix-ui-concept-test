const BrandSidebar = ({ logo, link }) => {
  return (
    <div>
      <a
        href={link}
        className="d-flex align-items-end link-body-emphasis text-decoration-none ">
        <div className="image">
          <img src={logo} width="40" height="32" alt="" />
        </div>
      </a>
    </div>
  );
};

export default BrandSidebar;
