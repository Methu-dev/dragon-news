import BreakingNews from "./BreakingNews/BreakingNews";
import Header from "./Shared/Header/Header";
import LeftSideNavbar from "./Shared/LeftSideNavbar/LeftSideNavbar";
import Navbar from "./Shared/Navbar/Navbar";
import RightSideNavbar from "./Shared/RightSideNavbar/RightSideNavbar";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      
        <div className="grid md:grid-cols-4 gap-6 grid-cols-1">
          <div className="border">
            <LeftSideNavbar></LeftSideNavbar>
          </div>
          <div className="col-span-2 border">
            <h1 className="text-3xl">News comming soon......</h1>
          </div>
          <div className="border">
            <RightSideNavbar></RightSideNavbar>
          </div>
        </div>
    </div>
  );
};

export default Home;
