import moment from "moment/moment";
import logo from "../../../assets/logo.png"

const Header = () => {
    return (
        <div className="text-center  my-8">
            <img className="block text-center mx-auto my-4" src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p className="text-xl mt-2">{moment().format(" dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;