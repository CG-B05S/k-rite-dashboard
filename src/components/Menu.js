import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex items-center justify-between text-base-content/60 pt-5 font-medium hover:cursor-pointer">
        <div className="ml-6">FOLDERS</div>
        <div className="mr-5">
          <FontAwesomeIcon
            icon={faCirclePlus}
            onClick={() => navigate("/underConstruction")}
          />
        </div>
      </div>
      <ul className="menu bg-base-100 w-72 rounded-box">
        <li>
          <details open>
            <summary>
              <FontAwesomeIcon icon={faFolder} />
              Products
            </summary>
            <ul>
              <li>
                <a onClick={() => navigate("/underConstruction")}>Roadmap</a>
              </li>
              <li>
                <a onClick={() => navigate("/underConstruction")}>Feedback</a>
              </li>
              <li>
                <a onClick={() => navigate("/underConstruction")}>
                  Performance
                </a>
              </li>
              <li>
                <a onClick={() => navigate("/underConstruction")}>Team</a>
              </li>
              <li>
                <a onClick={() => navigate("/underConstruction")}>Analytics</a>
              </li>
              <li>
                <summary className="text-base-content/60">
                  <FontAwesomeIcon icon={faCirclePlus} />
                  Add new sub
                </summary>
              </li>
              <li></li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <FontAwesomeIcon icon={faFolder} />
              Sales
            </summary>
            <ul>
              <li>
                <a onClick={() => navigate("/underConstruction")}>Roadmap</a>
              </li>
              <li>
                <a onClick={() => navigate("/underConstruction")}>Feedback</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <FontAwesomeIcon icon={faFolder} />
              Design
            </summary>
            <ul>
              <li>
                <a onClick={() => navigate("/underConstruction")}>Roadmap</a>
              </li>
              <li>
                <a onClick={() => navigate("/underConstruction")}>Feedback</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <summary>
            <FontAwesomeIcon icon={faFolder} />
            Office
          </summary>
        </li>
        <li>
          <summary>
            <FontAwesomeIcon icon={faFolder} />
            Legal
          </summary>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
