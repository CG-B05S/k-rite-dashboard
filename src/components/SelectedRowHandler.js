import React from "react";
import Select from "./select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive, faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";

// function to handling actions on selected rows.
const SelectedRowHandler = ({
  selectedRows,
  handleArchiveSelectedRows,
  handleDeleteSelectedRows,
  handleHideSelectedRowsBar,
}) => {
  const moreOptions = ["More"];

  return (
    <div className="flex gap-2 items-center border border-base-content/20 w-fit p-2 rounded-btn bg-base-100 fixed bottom-7 lg:left-[40%] sm:left-[25%] min-[320px]:left-[25%] min-[220px]:left-[25%] z-10">
      <div className="flex gap-2">
        <button className="btn btn-xs btn-neutral">
          {selectedRows.length}
        </button>
        <div>Selected</div>
      </div>

      <div className="flex gap-3 items-center">
        <button
          className="btn btn-sm btn-outline border-base-content/20 bg-base-100"
          onClick={handleArchiveSelectedRows}
        >
          <FontAwesomeIcon icon={faArchive} /> Archive
        </button>
        <button
          className="btn btn-sm btn-outline btn-error border-base-content/20 bg-base-100"
          onClick={handleDeleteSelectedRows}
        >
          <FontAwesomeIcon icon={faTrash} /> Delete
        </button>
        <Select options={moreOptions} placeholder="More" />
        <FontAwesomeIcon
          icon={faXmark}
          className="text-base-content/40 cursor-pointer"
          onClick={handleHideSelectedRowsBar}
        />
      </div>
    </div>
  );
};
export default SelectedRowHandler;
