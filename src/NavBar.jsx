

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 mt-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      <li className="text-[#020043] text-base"><a>Home </a></li>
      <li className="text-[#020043] text-base"><a>Services</a></li>
      <li className="text-[#020043] text-base"><a>Blog</a></li>
      <li className="text-[#020043] text-base"><a>About Us</a></li>
      </ul>
    </div>
    <div>
        <img src="https://i.postimg.cc/QN28N6jK/logo-dark.png" alt="" />
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li className="text-[#020043] text-base"><a>Home </a></li>
      <li className="text-[#020043] text-base"><a>Services</a></li>
      <li className="text-[#020043] text-base"><a>Blog</a></li>
      <li className="text-[#020043] text-base"><a>About Us</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  <button className=" rounded-xl border-2 border-[#020043] px-5 py-2 font-medium text-[#020043] flex gap-2 ">Appointment <img className="mt-1" src="https://i.postimg.cc/ncqHXvLR/Arrow-1.png" alt="" /></button>
    
  </div>
</div>
        </div>
    );
};

export default NavBar;