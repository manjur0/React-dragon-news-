import Header from "../Shared/Header/Header";
import LeftSideBar from "../Shared/LeftSideBar/LeftSideBar";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideBar from "../Shared/RightSideBar/RightSideBar";

const Home = () => {
    return (
        <div>
            <div>
                <Header></Header>
                <Navbar></Navbar>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 ">
                <div>
                    <LeftSideBar></LeftSideBar>
                </div>
                <div className="col-span-2">
                    <h2 className="text-4xl">News comming soon</h2>
                </div>
                <div>
                    <RightSideBar></RightSideBar>
                </div>
            </div>

        </div>
    );
};

export default Home;