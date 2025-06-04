import { useParams } from "react-router-dom"
import Header from "../Shared/Header/Header"
import Navbar from "../Shared/Navbar/Navbar"
import RightSideNavbar from "../Shared/RightSideNavbar/RightSideNavbar"


const News = () => {
    const {id} = useParams()
  return (
    <div>
        <Header />
        <Navbar />
        <div className="grid md:grid-cols-4">
            <div className="col-span-3">
                <h1 className="text-2xl">Dragon News</h1>
                <p>{id}</p>
            </div>
            <div>
            <RightSideNavbar />
        </div>
        </div>
    </div>
  )
}

export default News