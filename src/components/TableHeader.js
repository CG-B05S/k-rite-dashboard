import React from "react";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faGear } from "@fortawesome/free-solid-svg-icons";

const TableHeader = ({ handleSearch }) => {
  const navigate = useNavigate();
  return (
    <div className="flex lg:justify-between m-4 sm:justify-between min-[320px]:justify-between min-[220px]:justify-between">
      <h1 className="text-3xl text-bold lg:m-0 sm:ml-12 min-[320px]:ml-12 min-[220px]:ml-12">
        Products
      </h1>
      <div className="flex gap-2">
        <Search onSearch={handleSearch} />
        <div className="tooltip" data-tip="Notifications" onClick={() => navigate("/underConstruction")}>
          <button className="btn btn-sm bg-base-100">
            <FontAwesomeIcon icon={faMessage} />
          </button>
        </div>
        <div className="tooltip" data-tip="Settings" onClick={() => navigate("/underConstruction")}>
          <button className="btn btn-sm bg-base-100">
            <FontAwesomeIcon icon={faGear} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
