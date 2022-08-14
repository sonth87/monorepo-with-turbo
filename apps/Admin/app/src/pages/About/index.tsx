import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link to="/" className="text-blue-500">
        Go to Dashboard page
      </Link>
    </div>
  );
};

export default About;
