import { Link, NavLink, useNavigation } from "react-router-dom";
import { logoutUser } from "../store/action/actionCreator";
import { useDispatch } from "react-redux";

const Navbar = () => {
  // const dispatch = useDispatch()
  // const navigate = useNavigation()

  // const handleLogout = () => {
  //   dispatch(logoutUser())
  //   navigate("/login")
  // }
  const navbarStyle = {
    position: "fixed",
    top: 0,
    background: "#2F5296"
  }
  const logoStyle = {
    width: '150px',
    height: 'auto',
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg w-100" style={navbarStyle}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" ><img src="https://www.bluebirdgroup.com/asset/51_tahun/Icon_BBG_51th_Bluebird_Group.svg" style={logoStyle} alt="" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {/* <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link> */}
              <Link to="/item" className="nav-link">Item</Link>
              {/* <Link to="/login" className="nav-link" onClick={handleLogout}>Logout</Link> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar