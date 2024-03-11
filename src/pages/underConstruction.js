import React from "react";
import { useNavigate } from "react-router-dom";

const UnderConstruction = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <img
        src="https://cdn.dribbble.com/users/126357/screenshots/2428533/media/8fdb8ca8da13e92f4a22bca97a8c451c.png?resize=800x600&vertical=center"
        alt="Under construction"
      />
      <button className="btn btn-md" onClick={() => navigate("/")}>
        Go back
      </button>
    </div>
  );
};

export default UnderConstruction;
