const NavbarItem = (props) => {
  const { onClick, icon, isActive, title } = props;

  return (
    <div onClick={onClick}>
      <p
        className={`flex gap-4 items-center py-3 cursor-pointer  ${
          isActive && "text-primary font-medium"
        }`}
      >
        {icon}
        {title}
      </p>
    </div>
  );
};

export default NavbarItem;
