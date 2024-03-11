import React, { useState, useEffect } from "react";
import Select from "./select";
import data from "./data.json";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faArrowDownWideShort,
  faFilter,
  faFileImport,
} from "@fortawesome/free-solid-svg-icons";
const TableOptions = () => {
  const [brandOptions, setBrandOptions] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [tagsOptions, setTagsOptions] = useState([]);

  useEffect(() => {
    // Fetch data from data.json and set the options and placeholder
    setBrandOptions(data.map((item) => item.brand));
    setCategoryOptions(data.map((item) => item.categories));
    setTagsOptions(data.map((item) => item.tags));
  }, []);

  const navigate = useNavigate();
  
  return (
    <div className="flex justify-between mx-4">
      <div className="flex gap-2 mb-4">
        <Select options={brandOptions} placeholder="⌘ All brands" />
        <Select options={categoryOptions} placeholder="Desk" />
        <Select options={tagsOptions} placeholder="Tags" />
        <div className="tooltip" data-tip="Sort is disabled">
          <button className="btn btn-sm" disabled="disabled">
            <FontAwesomeIcon icon={faArrowDownWideShort} />
            Sort
          </button>
        </div>
        <div className="tooltip" data-tip="Filter is disabled">
          <button className="btn btn-sm" disabled="disabled">
            <FontAwesomeIcon icon={faFilter} /> Filter
          </button>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          className="btn btn-sm btn-outline border-base-content/20"
          onClick={() => navigate("/underConstruction")}
        >
          <FontAwesomeIcon icon={faCirclePlus} />
          Meeting
        </button>
        <button
          className="btn btn-sm btn-outline border-base-content/20"
          onClick={() => navigate("/underConstruction")}
        >
          <FontAwesomeIcon icon={faFileImport} /> Import/Export
        </button>
      </div>
    </div>
  );
};

export default TableOptions;
