import { useLoaderData } from "react-router-dom";
import BreakingNews from "./BreakingNews/BreakingNews";
import Header from "./Shared/Header/Header";
import LeftSideNavbar from "./Shared/LeftSideNavbar/LeftSideNavbar";
import Navbar from "./Shared/Navbar/Navbar";
import RightSideNavbar from "./Shared/RightSideNavbar/RightSideNavbar";
import NewCard from "./NewCard";

const Home = () => {
  const news = useLoaderData()
  console.log(news);
  
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      
        <div className="grid md:grid-cols-4 gap-6 grid-cols-1">
          <div>
            <LeftSideNavbar></LeftSideNavbar>
          </div>
          <div className="col-span-2">
            {
              news.map(aNews => <NewCard key={aNews._id} aNews={aNews}/>)
            }
          </div>
          <div>
            <RightSideNavbar></RightSideNavbar>
          </div>
        </div>
    </div>
  );
};

export default Home;
