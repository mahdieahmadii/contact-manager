import { CURRENTLINE, ORANGE, PINK } from "../../../helpers/colors";
import Contact from "../Contact";
import NotFound from "../../../assets/no-found.gif";
import Spinner from "../../Spinner";
import { Link } from "react-router-dom";

const Contacts = ({ contacts, loading, confirmDelete }) => {
  return (
    <>
      <section className="container">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3 float-end">
                <Link
                  to={"/contacts/add"}
                  className="btn m-2"
                  style={{ backgroundColor: PINK }}
                >
                  ساخت مخاطب جدید <i className="fa fa-plus-circle mx-2" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {loading ? (
        <Spinner />
      ) : (
        <section className="container">
          <div className="row">
            {contacts.length ? (
              contacts.map((c) => (
                <Contact
                  key={c.id}
                  contact={c}
                  confirmDelete={() => confirmDelete(c.id, c.fullname)}
                />
              ))
            ) : (
              <div
                className="text-center py-5"
                style={{ backgroundColor: CURRENTLINE }}
              >
                <p className="h3" style={{ color: ORANGE }}>
                  مخاطب یافت نشد ...
                </p>
                <img src={NotFound} alt="یافت نشد" className="w-25" />
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};
export default Contacts;
