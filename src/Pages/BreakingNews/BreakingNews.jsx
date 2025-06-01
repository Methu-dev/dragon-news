import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex bg-gray-400 mt-7">
      <button className="btn btn-secondary">Latest</button>
      <Marquee pauseOnHover={true} className="cursor-pointer" speed={100}>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default BreakingNews;
