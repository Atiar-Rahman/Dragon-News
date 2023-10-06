
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';
const RightSideNav = () => {
    return (
      <div>
        <div className="p-4 space-y-3 mb-6">
          <button className="btn btn-outline w-full">
            <FaGoogle></FaGoogle>
            Google
          </button>
          <button className="btn btn-outline w-full">
            <FaGithub></FaGithub>
            Github
          </button>
        </div>
        <div className="p-4 space-y-3 mb-6">
          <h1 className="text-3xl">find us on</h1>
          <a className="p-4 flex text-lg items-center border" href="">
            <FaFacebook className="mr-5"></FaFacebook>
            FaceBook
          </a>
          <a className="p-4 flex text-lg items-center border" href="">
            <FaTwitter className="mr-5"></FaTwitter>
            twitter
          </a>
          <a className="p-4 flex text-lg items-center border" href="">
            <FaInstagram className="mr-5"></FaInstagram>
            Instragram
          </a>
        </div>
        {/* Q Zone  */}

            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">QZone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
          
        </div>
      </div>
    );
};

export default RightSideNav;