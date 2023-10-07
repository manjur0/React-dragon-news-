import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideBar from "../Shared/LeftSideBar/LeftSideBar";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideBar from "../Shared/RightSideBar/RightSideBar";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
    const news = useLoaderData()
    console.log(news);
    return (
        <div>
            <div>
                <Header></Header>
                <BreakingNews></BreakingNews>
                <Navbar></Navbar>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 ">
                <div>
                    <LeftSideBar></LeftSideBar>
                </div>
                <div className="col-span-2">
                    {
                        news.map(singleNews => <NewsCard
                            key={singleNews._id}
                            news={singleNews}
                        >  </NewsCard>)
                    }
                </div>
                <div>
                    <RightSideBar></RightSideBar>
                </div>
            </div>

        </div>
    );
};

export default Home;