import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";
import { MdOutlineFacebook } from "react-icons/md";
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';

const RightSideNavbar = () => {
  return (
    <div>
      <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Login With</h1>
      <button className="btn btn-outline w-full">
        <FcGoogle />
        Login with Google
      </button>
      <button className="btn btn-outline w-full">
        <IoLogoGithub />
        Login with Github
      </button>
    </div>
    {/* find us */}
    <div className="p-4 mb-6">
       <h1 className="text-2xl mb-4 font-poppins font-semibold">Find Us On</h1>
       <a className="flex items-center p-4 text-lg rounded-t-lg border" href="">
        <MdOutlineFacebook className="mr-2.5"/>
        Facebook
       </a>
       <a className="flex items-center p-4 text-lg border-x" href="">
        <FaTwitter className="mr-2.5"/>
        Twitter
       </a>
       <a className="flex items-center p-4 text-lg rounded-b-lg border" href="">
        <BsInstagram className="mr-2.5"/>
        Instagram
       </a>
    </div>
    {/* Q zone */}
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Q-Zone</h1>
      <img src={qzone1} alt="missing img" />
      <img src={qzone2} alt="missing img" />
      <img src={qzone3} alt="missing img" />
    </div>
    </div>
  );
};

export default RightSideNavbar;
