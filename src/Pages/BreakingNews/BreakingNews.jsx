import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex bg-gray-400 mt-7">
      <button className="btn btn-secondary">Latest</button>
      <Marquee pauseOnHover={true} className="cursor-pointer" speed={100}>
        The MERN stack is a popular full-stack development framework that combines four powerful technologies: MongoDB, Express.js, React.js, and Node.js. It allows developers to build modern web applications entirely using JavaScript, both on the client side and server side. React.js is used to create dynamic and responsive user interfaces, while Express.js and Node.js handle the backend logic and server-side operations. MongoDB, a NoSQL database, stores data in flexible JSON-like documents, making it easy to work with data in JavaScript environments. The biggest advantage of the MERN stack is its seamless integration and use of a single language throughout the application, which speeds up development and makes maintenance easier. It’s widely used for building social media platforms, e-commerce sites, real-time chat applications, and many other web projects. Overall, MERN provides a robust and efficient way to develop scalable, high-performance web applications.
      </Marquee>

    </div>
  );
};

export default BreakingNews;
