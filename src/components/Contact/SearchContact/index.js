const SearchContact = () => {
  return (
    <div className="input-group mx-2 w-75" dir="ltr">
      <span
        className="input-group-text"
        id="basic-addon1"
        style={{ backgroundColor: "purple" }}
      >
        <i className="fas fa-search" />
      </span>

      <input
        dir="rtl"
        type="text"
        style={{ backgroundColor: "gray", borderColor: "purple" }}
        className="form-control"
        placeholder="جستجوی مخاطب"
        aria-label="search"
        aria-describedby="basic-addon1"
      />
    </div>
  );
};
export default SearchContact;
