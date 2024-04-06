import { Link, useLocation } from "react-router-dom";

import "./breadcrumb.css";

const BreadCrumb = () => {
  const location = useLocation();

  let currentLink = "";
  let crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <div className="crumb">
          <Link to={currentLink} className="breadcrumb-link">
            {crumb.replace("%20", " ")}
          </Link>
        </div>
      );
    });
  return <p className="breadcrumb">{crumbs}</p>;
};

export default BreadCrumb;
