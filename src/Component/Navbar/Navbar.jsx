import Logout from "../Logout/Logout";

const Navbar = () => {
  return (
    <div className="">
      <div className=" flex justify-between">
        <div className="font-bold text-2xl text-orange-600">My Practice</div>
        <div>
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
