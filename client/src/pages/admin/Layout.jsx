import { Outlet } from "react-router-dom";
import { assets } from "../../assets/assets";
import Sidebar from "../../components/admin/Sidebar";
import { useAppContext } from "../../context/AppContext";

const Layout = () => {

  const { axios, setToken, navigate } = useAppContext();

  const logout = () => {
    localStorage.removeItem('token');
    axios.defaults.headers.common['Authorization'] = null;
    setToken(null)
    navigate("/");
  };

  return (
    <>
      <nav className="flex items-center justify-between py-2 h-17.5 px-4 sm:px-12 border-b border-gray-200">
        <img
          src={assets.writewave_logo}
          alt=""
          className="w-32 sm:w-40 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <button
          className="text-sm px-8 py-2 bg-primary text-white rounded-full"
          onClick={logout}
        >
          Logout
        </button>
      </nav>

      <div className="flex h-[calc(100vh-70px)]">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
