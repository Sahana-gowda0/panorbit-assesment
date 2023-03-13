import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserDetails } from "./contextApi";
const UserModal = ({ user }) => {
  const navigate = useNavigate();
  const id = useParams();
  const userList = useContext(UserDetails);
  const [users, setUsers] = useState([]);
  const [userData, setUserdata] = useState([]);
  const getUser = users?.filter((data) => {
    if (data.id == id.id) {
      return data;
    }
  });
  console.log("getUser", getUser);
  return (
    <>
      {user?.map((data) => {
        return (
          <div className="flex flex-col justify-center items-center w-[270px] bg-white p-[32px] rounded-2xl absolute right-10 top-16 shadow-2xl shadow-gray-500">
            <div className="w-[80px] h-[80px]  mb-6">
              <img
                className="rounded-[50%] w-full h-full"
                src={`${data.profilepicture}`}
                alt="user modal"
              />
            </div>
            <div className="leading-5 mb-[10px] text-center">
              <div className="font-bold"> {data.name} </div>
              <div className="text-gray-400"> {data.email} </div>
            </div>
            <div>
              {userList.slice(0, 2).map((items) => {
                return (
                  <div
                    className="flex items-center py-[6px] border-t-[1px] border-gray-200 font-[400] cursor-pointer"
                    key={items.id}
                    onClick={() => setUserdata(user)}
                  >
                    <div className="w-[33px] h-[33px] rounded-[50%] mr-[15px]">
                      <img
                        className="w-[100%] h-[100%] rounded-[50%]"
                        src={`${items.profilepicture}`}
                        alt="User Profile"
                      />
                    </div>
                    <div className="text-sm">{items.name}</div>
                  </div>
                );
              })}
            </div>
            <div>
              <button
                className="bg-red-500 cursor-pointer text-white font-medium border-none outline-none px-[15px] py-[6px] rounded-2xl text-[15px]
              mt-[12px]"
                onClick={() => navigate("/")}
              >
                Sign out{" "}
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default UserModal;
