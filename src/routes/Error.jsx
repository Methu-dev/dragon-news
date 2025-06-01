import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-4 text-center">
      <h1 className="text-4xl font-bold text-red-600">Oops !!!</h1>
      <p className="text-lg text-gray-700">
        Uh Oh, something went wrong!<br /> 
        <span className="text-red-500">{error.message}</span>
      </p>
      <Link to="/">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md shadow-md">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
