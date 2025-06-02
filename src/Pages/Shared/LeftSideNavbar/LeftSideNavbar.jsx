import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


const LeftSideNavbar = () => {
  const [categories, setCategory] = useState([]);

  useEffect(()=>{
    fetch("categories.json")
    .then(res => res.json())
    .then(data =>setCategory(data))
  },[])
  return (
    <div className="space-y-6">
        <h1 className="text-2xl font-semibold">All Caterogy: {categories.length}</h1>
        {
          categories.map(category => <Link key={category.id} to={`/category/${category.id}`} className="block ml-4 text-lg font-semibold">{category.name}</Link>)
        }
    </div>
  )
}

export default LeftSideNavbar