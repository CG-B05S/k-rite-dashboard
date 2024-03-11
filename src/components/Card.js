import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ icon, text, shortcut, textClassName, btnText, border }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`card w-72 bg-base-100 shadow-sm flex-start px-5 py-2 ${
        border ? "border border-base-content/5" : ""
      } rounded-btn hover:bg-base-200 hover:cursor-pointer`}
      onClick={() => navigate("/underConstruction")}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={icon} className={textClassName} />
          <div className={`text-sm font-medium ${textClassName}`}>{text}</div>
        </div>
        {shortcut && (
          <kbd className={`kbd kbd-sm ${textClassName}`}>{shortcut}</kbd>
        )}
        {btnText && (
          <button className="btn btn-xs btn-neutral">{btnText}</button>
        )}
      </div>
    </div>
  );
};

export default Card;
