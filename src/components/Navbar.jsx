const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Rakib Chat</span>
      <div className="user">
        <img src="https://i.ibb.co/Fx1DFPf/rh-abir.jpg" alt="" />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
