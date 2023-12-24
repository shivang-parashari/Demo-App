import Catagory from "./../components/Catagory";
import useApi from "../hooks/useApi";
import Product from "./../components/Product";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export function Home() {
  const { response, error, loading } = useApi(
    "https://fakestoreapi.com/products/categories/"
  );
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
  };

  if (response) {
    return (
      <div>
        <div className="header-items">
          <h3 className="app-name">SHOPPING</h3>

          {response.map((catagory) => {
            return <Catagory key={catagory} catagory={catagory} />;
          })}
          <div className="left-panel">
            <span>{user.email}</span>
            <button className="logout" onClick={handleClick}>
              Log out
            </button>
          </div>
        </div>
        <Product />
      </div>
    );
  } else if (error) {
    return <div>Error while getting the catagory data</div>;
  } else if (loading) {
    return <div>Loading......</div>;
  } else {
    return <div>No Catagories are present</div>;
  }
}
