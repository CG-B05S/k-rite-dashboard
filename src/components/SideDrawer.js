import React from "react";
import Logo from "./Logo";
import Card from "./Card";
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenNib,
  faBullhorn,
  faCode,
  faPlus,
  faUserPlus,
  faCircleQuestion,
  fa7,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

//  SideDrawer component for displaying a sidebar navigation menu.
const SideDrawer = () => {
  return (
    <div className="drawer lg:drawer-open z-50">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="drawer-button lg:hidden absolute top-9 left-9"
        >
          <FontAwesomeIcon icon={faBars} size="2x" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="border lg:w-70 flex flex-col lg:bg-base-100 sm:bg-base-200 min-[220px]:bg-base-200 justify-between lg:min-h-[96vh] lg:m-4 rounded-btn">
          <div className="flex flex-col justify-center items-center lg:py-2">
            <Logo />
            <Card icon={faPenNib} text="Design Team" shortcut="⌘+1" border />
            <Card
              icon={faBullhorn}
              text="Marketing Team"
              shortcut="⌘+2"
              border
            />
            <Card icon={faCode} text="Development Team" shortcut="⌘+3" border />
            <Card
              icon={faPlus}
              text="Create a Team"
              textClassName="text-xs text-base-content/60"
              border
            />
            <Menu />
          </div>
          <div className="flex flex-col justify-center items-center py-4 lg:bg-base-100">
            <Card icon={faUserPlus} text="Invite teammates" />
            <Card
              icon={faCircleQuestion}
              text="Help and first steps"
              shortcut="⌘+6"
            />
            <Card icon={fa7} text="days left on trail" btnText="Add billing" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
