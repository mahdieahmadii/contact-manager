import { CURRENTLINE, PINK, ORANGE } from '../../../helpers/colors/index';
import { Contact } from '../../Contact/index';

export const Contacts = (props) => {
    const { contacts } = props;
    return (
        <>
            <section className="container">
                <div className="grid">
                    <div className="row">
                        <div className="col">
                            <p className="h3">
                                <button className="btn mx-2" style={{ backgroundColor: PINK }}>
                                    ساخت مخاطب جدید
                                    <i className="fa fa-plus-circle mx-2" />
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="row">
                    {
                        contacts.length > 0 ? contacts.map(c => <Contact key={c.id} contact={c} />) :
                            (<div className="text-center py-5">
                                <p className="h3" style={{ color: ORANGE }}>مخاطب یافت نشد ...</p>
                                <img src={require("../../../assets/no-found.gif")} alt="پیدا نشد" className="w-25" />
                            </div>)
                    }
                </div>
            </section>
        </>
    )
}
