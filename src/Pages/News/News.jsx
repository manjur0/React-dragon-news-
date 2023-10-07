import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideBar from "../Shared/RightSideBar/RightSideBar";
import Navbar from "../Shared/Navbar/Navbar";


const News = () => {
    const { id, image_url, title, details } = useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3 mr-2">
                    <h2 className="text-3xl font-semibold">Dragon News</h2>
                    <img src={title} alt="" />
                </div>
                <RightSideBar></RightSideBar>
            </div>
        </div>
    );
};

export default News;