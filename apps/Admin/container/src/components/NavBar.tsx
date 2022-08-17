import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { AppLink } from "../constant/app";

const NavBar: FC = () => {
  const history = useHistory();

  return (
    <div>
      <div className="logo" onClick={() => history.push("/")}>
        VBI
      </div>
      <div className="space-4">
        {AppLink.map((link) => (
          <button
            key={link.key}
            onClick={() => (window.location.href = link.url)}
            className="border px-10 py-2 mr-2"
          >
            {link.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
