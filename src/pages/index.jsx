import "../App.css";
import React, { useState } from "react";
import Table from "../components/Table";
import data from "../components/data.json";
import SelectedRowHandler from "../components/SelectedRowHandler";
import SideDrawer from "../components/SideDrawer";
import TableHeader from "../components/TableHeader";
import TableOptions from "../components/TableOptions";
import Divider from "../components/Divider";

function App() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [dataState, setData] = useState(data);
  const [archivedRowsFromState, setArchivedRows] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSelectedRowsBar, setShowSelectedRowsBar] = useState(true);

  // Function to handle row selection
  const handleRowSelect = (id) => {
    const index = selectedRows.indexOf(id);
    if (index === -1) {
      setSelectedRows([...selectedRows, id]);
    } else {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    }
  };

// Function to handle select all rows
  const handleSelectAllRows = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((item) => item.id));
    }
    setSelectAll(!selectAll);
  };

  // Function to handle deleting selected rows
  const handleDeleteSelectedRows = () => {
    const newData = dataState.filter((item) => !selectedRows.includes(item.id));
    setData(newData);
    setSelectedRows([]);
    setSelectAll(false);
  };

// Function to handle archiving selected rows
  const handleArchiveSelectedRows = () => {
    const archivedRows = dataState.filter((item) =>
      selectedRows.includes(item.id)
    );
    setArchivedRows([...archivedRows, ...archivedRowsFromState]);
    const newData = dataState.filter((item) => !selectedRows.includes(item.id));
    setData(newData);
    setSelectedRows([]);
    setSelectAll(false);
  };

  // Function to handle search query changes
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Function to hide the selected rows bar
  const handleHideSelectedRowsBar = () => {
    setShowSelectedRowsBar(false);
  };

  return (
    <div className="flex">
      <SideDrawer />
      <div className="border border-base-content/10 mx-6 mt-4 mb-6 rounded-btn">
        <TableHeader handleSearch={handleSearch} />
        <Divider />
        <TableOptions />
        <Table
          data={dataState}
          handleRowSelect={handleRowSelect}
          selectedRows={selectedRows}
          selectAll={selectAll}
          onSelectAll={handleSelectAllRows}
          searchQuery={searchQuery}
        />
         {/* Conditionally displaying Selected rows handler bar */}
        {showSelectedRowsBar && selectedRows.length > 0 && (
          <SelectedRowHandler
            selectedRows={selectedRows}
            handleArchiveSelectedRows={handleArchiveSelectedRows}
            handleDeleteSelectedRows={handleDeleteSelectedRows}
            handleHideSelectedRowsBar={handleHideSelectedRowsBar}
          />
        )}
      </div>
    </div>
  );
}

export default App;
