import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faTableCellsLarge,
} from "@fortawesome/free-solid-svg-icons";

const BadgeComponent = ({ value }) => {
  let badgeClass =
    "badge badge-outline min-[320px]:min-w-28 min-[220px]:min-w-28";

  // Conditionally update badgeClass based on the value
  switch (value) {
    case "Automation":
      badgeClass += " badge-primary";
      break;
    case "Publishing":
      badgeClass += " badge-secondary";
      break;
    case "SAAS":
    case "Marketplace":
    case "in 30 minutes":
    case "in 6 hours":
    case "in 1 hour":
      badgeClass += " badge-success";
      break;
    case "B2B":
    case "Mobile":
    case "Finance":
    case "Transportation":
    case "E-commerce":
      badgeClass += " badge-warning";
      break;
    case "B2C":
      badgeClass += " badge-accent";
      break;
    case "Technology":
    case "Web Service":
    case "Tomorrow":
      badgeClass += " badge-info";
      break;
    case "No contact":
      badgeClass += " badge-error";
      break;
    default:
      badgeClass += " badge-ghost";
      break;
  }

  return <div className={badgeClass}>{value}</div>;
};

const Table = ({
  data,
  handleRowSelect,
  selectedRows,
  selectAll,
  onSelectAll,
  searchQuery,
}) => {
    // Filter data based on search query
  const filteredData = data.filter((item) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    return (
      item.brand.toLowerCase().includes(lowerCaseQuery) ||
      item.description.toLowerCase().includes(lowerCaseQuery) ||
      item.categories.some((category) =>
        category.toLowerCase().includes(lowerCaseQuery)
      ) ||
      item.tags.some((tag) => tag.toLowerCase().includes(lowerCaseQuery)) ||
      item.nextMeeting.toLowerCase().includes(lowerCaseQuery)
    );
  });

  return (
    <div className="overflow-x-auto lg:w-[80vw] sm:w-[95vw] md:sm:w-[95vw]">
      {filteredData.length === 0 ? (
        <div className="flex flex-col gap-4 text-center text-gray-500 my-10 text-xl">
          <FontAwesomeIcon icon={faTableCellsLarge} size="2x" />
          No rows found
        </div>
      ) : (
        <table className="table table-sm sm:table-xs min-[320px]:table-xs min-[220px]:table-xs">
          <thead>
            <tr>
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm ml-2"
                    checked={selectAll}
                    onChange={onSelectAll}
                  />
                </label>
              </th>
              <th>
                <div className="flex justify-between items-center">
                  <div>Brand</div>
                  <div className="text-xl">+</div>
                </div>
              </th>
              <th>Description</th>
              <th>Members</th>
              <th>Categories</th>
              <th>Tags</th>
              <th>Next meeting</th>
              <th className="hover:cursor-pointer text-xl">+</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr
                key={item.id}
                className={
                  selectedRows.includes(item.id) ? "bg-base-200/70" : ""
                }
                onClick={() => handleRowSelect(item.id)}
              >
                {" "}
                <td>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm ml-2"
                      checked={selectedRows.includes(item.id)}
                      onChange={() => handleRowSelect(item.id)}
                    />
                  </label>
                </td>
                <td>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-between gap-2">
                      <div className="avatar">
                        <div className="w-6 rounded-md">
                          <img src={item.brandLogo} alt={item.brand} />
                        </div>
                      </div>
                      <div>
                        <div className="font-medium">{item.brand}</div>
                      </div>
                    </div>
                    {item.notification && (
                      <div className="flex gap-1 ml-2 text-base-content/70 items-center">
                        <FontAwesomeIcon icon={faMessage} />
                        <span>{item.notification}</span>
                      </div>
                    )}
                  </div>
                </td>
                <td>
                  <div className="font-medium truncate w-48">
                    {item.description}
                  </div>
                </td>
                <td>
                  <div className="avatar-group -space-x-3 rtl:space-x-reverse">
                    {item.members.map((member, index) => (
                      <div className="avatar" key={index}>
                        <div className="w-6">
                          <img src={member} alt={`member-${index}`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </td>
                <td>
                  <div className="flex gap-1">
                    {Array.isArray(item.categories) ? (
                      item.categories.map((category, index) => (
                        <BadgeComponent key={index} value={category} />
                      ))
                    ) : (
                      <BadgeComponent value={item.categories} />
                    )}
                  </div>
                </td>
                <td>
                  <div className="flex gap-1 truncate w-48">
                    {item.tags.map((tag, index) => (
                      <span className="badge badge-ghost badge-md" key={index}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>
                <td>
                  <BadgeComponent value={item.nextMeeting} />
                </td>
              </tr>
            ))}
            <tr className="text-right text-base-content/70">
              <td></td>
              <td className="font-bold">
                {filteredData.length}{" "}
                <span className="font-medium text-base-content/40">Count</span>
              </td>
              <td>+ Add calculation</td>
              <td>+ Add calculation</td>
              <td>+ Add calculation</td>
              <td>+ Add calculation</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
