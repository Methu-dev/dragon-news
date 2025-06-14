import { Link } from "react-router-dom";


const NewCard = ({aNews}) => {
    const {title, image_url,details, _id} = aNews;
  return (
    <div className="card bg-base-100 shadow-sm mb-16">
  <figure>
    <img
      src={image_url}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    {
  details.length > 200 ? (
    <p>
      {details.slice(0, 200)}
      <Link to={`/news/${_id}`} className="text-blue-400 font-bold"> Read More ...</Link>
    </p>
  ) : (
    <p>{details}</p>
  )
}

  </div>
</div>
  )
}

export default NewCard