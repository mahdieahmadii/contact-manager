import SearchContact from "./SearchContact";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-sm shadow-lg">
      <div className="container">
        <div className="row w-100">
          <div className="col">
            <i className="fas fa-id-badge" />
            وب اپلیکیشن مدیریت <span style={{ color: "purple" }}>مخاطبین</span>
          </div>
          <div className="col">
            <SearchContact />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
