import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserDetails } from "./contextApi";
import OutsideClickHandler from "react-outside-click-handler";
import UserModal from "./UserModal";

const Posts = () => {
  const id = useParams();
  const userList = useContext(UserDetails);
  const [users, setUsers] = useState([]);
  const [showUserModal, setShowUserModal] = useState(false);
  const getUser = users?.filter((data) => {
    if (data.id == id.id) {
      return data;
    }
  });

  useEffect(() => {
    setUsers(userList);
  }, [userList]);

  return (
    <>
      <div>
        {getUser?.map((user) => {
          return (
            <div className="mt-[20px] w-[900px] h-[650px]">
              <>
                <div className="flex justify-between pb-[20px] border-b-[1px] border-gray-200">
                  <label className="text-lg font-bold text-[#413f3f]">
                    {" "}
                    Post{" "}
                  </label>
                  <div
                    className="flex items-center justify-center cursor-pointer"
                    onClick={() => {
                      setShowUserModal(true);
                    }}
                  >
                    <img
                      src={`${user.profilepicture}`}
                      className="h-[30px] w-[30px] rounded-xl mr-[10px]"
                      alt=""
                    />
                    <span className="text-[#717171] text-lg font-medium">
                      {" "}
                      {user.name}{" "}
                    </span>
                  </div>
                </div>
                {showUserModal && (
                  <OutsideClickHandler
                    onOutsideClick={() => {
                      setShowUserModal(false);
                    }}
                  >
                    <UserModal user={getUser} />
                  </OutsideClickHandler>
                )}
                <div className="w-[100%] h-[580px] flex justify-center items-center">
                  <span className="text-[80px] font-bold text-[#d2c9c968]">
                    {" "}
                    Coming Soon{" "}
                  </span>
                </div>
              </>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Posts;
