import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex">
      <button className="btn btn-secondary">Breaking news</button>
      <Marquee pauseOnHover={true} spreed={200}>
        <Link className="my-12" to="/">
          I can be a React component, multiple React components, or just some
          text.......
        </Link>
        <Link className="my-12" to="/">
          I can be a React component, multiple React components, or just some
          text.........
        </Link>
        <Link className="my-12" to="/">
          I can be a React component, multiple React components, or just some
          text.......
        </Link>
        <Link className="my-12" to="/">
          I can be a React component, multiple React components, or just some
          text........
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
