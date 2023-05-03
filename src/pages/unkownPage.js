import { Outlet, Link } from "react-router-dom";

const UnkownPage = () => {
  return (
    <>
        <h1>This URL is not correct.</h1>
        <p>
            Go to home page <Link to="/home">Home</Link>
        </p>
    </>
  )
};

export default UnkownPage;

