import React, { useState } from "react";
import Container from "./Container";

const SideNav = () => {
  const data = [
    {
      id: 1,
      name: "Profile",
      path: "/profile/:id",
    },
    {
      id: 2,
      name: "Posts",
      path: "/posts",
    },
    {
      id: 3,
      name: "Gallery",
      path: "/gallery",
    },
    {
      id: 4,
      name: "ToDo",
      path: "/todo",
    },
  ];
  const [indValue, setIndValue] = useState(0);
  const [path, setPath] = useState("/profile/:id");
  return (
    <div className="flex box-border m-[10px]">
      <div className="sideBar">
        <nav className="navBar">
          {data?.map((ele, index) => {
            function handleNavigate() {
              setIndValue(index);
              setPath(ele.path);
            }
            return (
              <ul>
                <li
                  className={`navLink ${indValue === index && "liActive"}`}
                  onClick={() => handleNavigate(index)}
                >
                  <span className={`navLink ${indValue === index && "active"}`}>
                    {ele.name}
                  </span>
                </li>
                <hr className="hrLine" />
              </ul>
            );
          })}
        </nav>
      </div>
      <Container path={path}/>
    </div>
  );
};

export default SideNav;
