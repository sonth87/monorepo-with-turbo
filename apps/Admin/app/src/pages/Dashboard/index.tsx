import React from "react";
import { Button } from "ui";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const history = useHistory();

  const handleBtnClick = () => {
    history.push("/about");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <Button
        label="Go to About page"
        onClick={handleBtnClick}
        className="text-blue-500"
      />
    </div>
  );
};

export default Dashboard;
