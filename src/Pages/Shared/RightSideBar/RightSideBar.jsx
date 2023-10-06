import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import Qzone1 from "../../../assets/qZone1.png"
import Qzone2 from "../../../assets/qZone2.png"
import Qzone3 from "../../../assets/qZone3.png"


const RightSideBar = () => {
    return (
        <div className="">
            <div className='space-y-2'>
                <h3 className="text-3xl font-semibold mb-4">Login With</h3>
                <button className="btn btn-outline w-full text-blue-400 border-blue-400">
                    <FaGoogle></FaGoogle> Login With Google
                </button>
                <button className="btn btn-outline w-full text-black border-slate-400">
                    <FaGithub></FaGithub> Login With GItHub
                </button>
            </div>

            {/* Find Us On */}
            <div>
                <div className='mt-5'>
                    <h3 className="text-3xl font-semibold mb-4 ">Find Us On</h3>

                    <a className='flex gap-2 items-center p-4 text-lg border rounded-t-lg text-blue-700' href="">
                        <FaFacebook></FaFacebook>
                        Facebook

                    </a>
                    <a className='flex gap-2 items-center p-4 text-lg border-x text-blue-400 ' href="">
                        <FaTwitter></FaTwitter>
                        Twitter

                    </a>
                    <a className='flex gap-2 items-center p-4 text-lg border rounded-b-lg text-rose-400' href="">
                        <FaInstagram></FaInstagram>
                        Instagram

                    </a>
                </div>
            </div>
            <div className='space-y-2'>
                <h3 className="text-3xl font-semibold mb-4">Q-Zone</h3>
                <img src={Qzone1} alt="" />
                <img src={Qzone2} alt="" />
                <img src={Qzone3} alt="" />
                
                <div className='text-center'>
                    <h2 className="text-4xl">Create an Amazing Newspaper</h2>
                    <p className="text-2xl">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <button className='btn btn-secondary'>Learn More</button>
                </div>
            </div>

        </div>
    );
};

export default RightSideBar;